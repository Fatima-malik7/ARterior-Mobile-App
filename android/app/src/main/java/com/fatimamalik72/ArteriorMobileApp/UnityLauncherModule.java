package com.yourapp;

import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class UnityLauncherModule extends ReactContextBaseJavaModule {
    UnityLauncherModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "UnityLauncher";
    }

    @ReactMethod
    public void openUnity() {
        Intent intent = new Intent(getReactApplicationContext(), com.unity3d.player.UnityPlayerActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(intent);
    }

    @ReactMethod
    public void openUnityWithModel(String modelName) {
        Intent intent = new Intent(getReactApplicationContext(), com.unity3d.player.UnityPlayerActivity.class);
        intent.putExtra("model_name", modelName);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(intent);
}
}



