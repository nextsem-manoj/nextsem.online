package online.nextsem.app;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import androidx.activity.EdgeToEdge;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Fix: Enable edge-to-edge display to resolve Play Console deprecated API warning
        EdgeToEdge.enable(this);
        super.onCreate(savedInstanceState);
        WebView webView = this.getBridge().getWebView();
        if (webView != null) {
            webView.setBackgroundColor(android.graphics.Color.parseColor("#060c18"));
            WebSettings settings = webView.getSettings();
            settings.setSupportZoom(true);
            settings.setBuiltInZoomControls(true);
            settings.setDisplayZoomControls(false); // Enable smooth pinch-to-zoom without overlay buttons
        }
    }
}
