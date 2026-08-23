import os
import math
import subprocess
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_splash_frames(output_dir="scripts/frames", width=1280, height=720, fps=60, duration=3.5):
    os.makedirs(output_dir, exist_ok=True)
    total_frames = int(fps * duration)
    
    # Neon Green
    neon_green = (57, 255, 20)
    white = (255, 255, 255)
    dark_gray = (148, 163, 184)
    black = (0, 0, 0)

    # Try loading system fonts
    try:
        font_big = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 96) # Bold
        font_ext = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 60)
        font_title = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 32)
        font_sub = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 16)
        font_box = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 64)
    except:
        font_big = ImageFont.load_default()
        font_ext = font_big
        font_title = font_big
        font_sub = font_big
        font_box = font_big

    center_x = width // 2
    center_y = height // 2

    print(f"Rendering {total_frames} frames ({fps} FPS, {width}x{height})...")

    for f in range(total_frames):
        t = f / fps # Current time in seconds
        
        # Base image
        img = Image.new("RGBA", (width, height), (0, 0, 0, 255))
        draw = ImageDraw.Draw(img)

        # 1. Radial ambient green glow in center
        glow_alpha = int(25 * (1.0 + 0.3 * math.sin(t * 4)))
        if t < 3.0:
            glow_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
            gdraw = ImageDraw.Draw(glow_img)
            glow_radius = 180
            gdraw.ellipse(
                [center_x - glow_radius, center_y - glow_radius, center_x + glow_radius, center_y + glow_radius],
                fill=(57, 255, 20, glow_alpha)
            )
            glow_img = glow_img.filter(ImageFilter.GaussianBlur(50))
            img = Image.alpha_composite(img, glow_img)
            draw = ImageDraw.Draw(img)

        # ── Phase 0 & 1: Letter animation (0.0s to 1.1s) ──
        if t < 1.1:
            # Letter Pop In (0.0s to 0.3s)
            pop_progress = min(1.0, t / 0.3)
            # Cubic overshoot
            scale = 0.4 + 0.6 * (1.0 - math.pow(1.0 - pop_progress, 3))
            
            # Expansion (0.3s to 1.1s)
            ext_progress = 0.0
            if t > 0.3:
                ext_progress = min(1.0, (t - 0.3) / 0.4)
                # Smooth curve
                ext_progress = 1.0 - math.pow(1.0 - ext_progress, 3)

            # Draw "N" and "ext"
            n_x = center_x - 140
            n_y = center_y - 80
            
            # Draw N with green glow
            draw.text((n_x, n_y), "N", font=font_big, fill=neon_green)
            
            # Draw expanding "ext"
            if ext_progress > 0:
                ext_alpha = int(255 * ext_progress)
                draw.text((n_x + 85, n_y + 32), "ext", font=font_ext, fill=(57, 255, 20, ext_alpha))

            # Draw "S" and "em"
            s_offset = int(140 * ext_progress)
            s_x = center_x + 10 + s_offset
            s_y = center_y - 80
            draw.text((s_x, s_y), "S", font=font_big, fill=neon_green)

            if ext_progress > 0:
                em_alpha = int(255 * ext_progress)
                draw.text((s_x + 65, s_y + 32), "em", font=font_ext, fill=(57, 255, 20, em_alpha))

        # ── Phase 2: NS Logo Box Emblem (1.1s to 2.2s) ──
        elif t < 2.2:
            box_progress = min(1.0, (t - 1.1) / 0.4)
            box_scale = 0.6 + 0.4 * (1.0 - math.pow(1.0 - box_progress, 3))
            
            box_size = int(160 * box_scale)
            box_left = center_x - box_size // 2
            box_top = center_y - box_size // 2 - 40
            box_right = box_left + box_size
            box_bottom = box_top + box_size

            # Glowing rounded rect
            draw.rounded_rectangle(
                [box_left, box_top, box_right, box_bottom],
                radius=int(32 * box_scale),
                fill=(10, 10, 10, 255),
                outline=neon_green,
                width=4
            )
            # NS Text in center of box
            draw.text((center_x - 48, box_top + int(42 * box_scale)), "NS", font=font_box, fill=neon_green)

        # ── Phase 3: Fade Out (2.2s to 3.0s) ──
        elif t <= 3.0:
            fade_progress = (t - 2.2) / 0.8
            fade_alpha = max(0.0, 1.0 - fade_progress)
            
            box_size = 160
            box_left = center_x - box_size // 2
            box_top = center_y - box_size // 2 - 40
            box_right = box_left + box_size
            box_bottom = box_top + box_size

            box_color = (int(57 * fade_alpha), int(255 * fade_alpha), int(20 * fade_alpha), 255)
            draw.rounded_rectangle(
                [box_left, box_top, box_right, box_bottom],
                radius=32,
                fill=(10, 10, 10, 255),
                outline=box_color,
                width=4
            )
            draw.text((center_x - 48, box_top + 42), "NS", font=font_box, fill=box_color)

        # ── App Title & Bouncing Dots (0.3s to 2.2s) ──
        if 0.3 <= t < 2.2:
            title_progress = min(1.0, (t - 0.3) / 0.4)
            title_alpha = int(255 * title_progress)
            
            # Nextsem Academy
            title_text = "Nextsem Academy"
            draw.text((center_x - 145, center_y + 70), title_text, font=font_title, fill=(255, 255, 255, title_alpha))

            # Subtitle
            sub_text = "LEARN · BUILD · GET HIRED"
            draw.text((center_x - 115, center_y + 115), sub_text, font=font_sub, fill=(57, 255, 20, title_alpha))

            # 3 Bouncing Dots
            for d in range(3):
                dot_x = center_x - 24 + d * 24
                dot_bounce = math.sin(t * 8 + d * 0.8)
                dot_y = center_y + 155 - int(max(0, dot_bounce * 8))
                dot_radius = 4
                draw.ellipse(
                    [dot_x - dot_radius, dot_y - dot_radius, dot_x + dot_radius, dot_y + dot_radius],
                    fill=neon_green
                )

        # Save frame
        frame_filename = os.path.join(output_dir, f"frame_{f:04d}.png")
        img.convert("RGB").save(frame_filename)

    print("All frames rendered successfully!")

if __name__ == "__main__":
    create_splash_frames()
