import math
import struct
import wave
import os

def generate_splash_audio(output_path="splash_audio.wav", duration=3.5, sample_rate=44100):
    num_samples = int(duration * sample_rate)
    samples = [0.0] * num_samples

    # E minor arpeggio notes (frequencies in Hz)
    notes = [329.63, 392.0, 493.88, 659.25, 783.99]
    interval = 0.32
    note_attack = 0.05
    note_decay = 0.65
    note_duration = note_attack + note_decay

    for i, freq in enumerate(notes):
        start_time = i * interval
        start_sample = int(start_time * sample_rate)
        note_sample_count = int(note_duration * sample_rate)

        for s in range(note_sample_count):
            idx = start_sample + s
            if idx >= num_samples:
                break
            
            t = s / sample_rate
            # Sine wave value
            val = math.sin(2.0 * math.pi * freq * t)

            # AD Envelope
            if t < note_attack:
                env = t / note_attack
            else:
                # Exponential decay from 1.0 down to 0.001
                decay_progress = (t - note_attack) / note_decay
                env = math.exp(-6.9077 * decay_progress) # ln(0.001) ~ -6.9077

            samples[idx] += val * env * 0.4

    # Apply master volume and fadeout
    for idx in range(num_samples):
        t = idx / sample_rate
        master_gain = 0.8
        if t > 1.8:
            fade_progress = min(1.0, max(0.0, (t - 1.8) / 0.8))
            master_gain *= (1.0 - fade_progress)
        samples[idx] *= master_gain

    # Normalize to 16-bit PCM
    max_val = max(max(abs(s) for s in samples), 0.001)
    scale = 32767.0 * 0.95 / max_val

    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    with wave.open(output_path, "w") as wav_file:
        wav_file.setnchannels(2) # Stereo
        wav_file.setsampwidth(2) # 16-bit
        wav_file.setframerate(sample_rate)
        
        frames = bytearray()
        for s in samples:
            val_int = int(s * scale)
            val_int = max(-32768, min(32767, val_int))
            packed = struct.pack("<hh", val_int, val_int)
            frames.extend(packed)
        
        wav_file.writeframes(frames)
    
    print(f"Generated clean audio at: {output_path}")

if __name__ == "__main__":
    generate_splash_audio("c:/Users/manoj2403/Documents/nextsem.online/logo for nextsem/splash_audio.wav")
