/**
 * Copyright (c) 2021 BlackBerry Limited. All Rights Reserved.
 * Some modifications to the original Text UI component for react-native
 * from https://github.com/facebook/react-native/
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * <p>This source code is licensed under the MIT license found in the LICENSE file in the root
 * directory of this source tree.
 */
package com.blackberry.bbd.reactnative.ui.text;

import android.util.DisplayMetrics;
import android.util.TypedValue;

import com.facebook.react.uimanager.DisplayMetricsHolder;

/** Android dp to pixel manipulation */
public class PixelUtil {

    /** Convert from DIP to PX */
    public static float toPixelFromDIP(float value) {
        return TypedValue.applyDimension(
                TypedValue.COMPLEX_UNIT_DIP, value, DisplayMetricsHolder.getWindowDisplayMetrics());
    }

    /** Convert from DIP to PX */
    public static float toPixelFromDIP(double value) {
        return toPixelFromDIP((float) value);
    }

    /** Convert from PX to SP */
    public static float toSPFromPixel(float value) {
        return value / DisplayMetricsHolder.getScreenDisplayMetrics().scaledDensity;
    }

    /** Convert from SP to PX */
    public static float toPixelFromSP(float value) {
        return toPixelFromSP(value, Float.NaN);
    }

    /** Convert from SP to PX */
    public static float toPixelFromSP(float value, float maxFontScale) {
        DisplayMetrics displayMetrics = DisplayMetricsHolder.getWindowDisplayMetrics();
        float scaledDensity = displayMetrics.scaledDensity;
        float currentFontScale = scaledDensity / displayMetrics.density;
        if (maxFontScale >= 1 && maxFontScale < currentFontScale) {
            scaledDensity = displayMetrics.density * maxFontScale;
        }

        return value * scaledDensity;
    }

    /** Convert from SP to PX */
    public static float toPixelFromSP(double value) {
        return toPixelFromSP((float) value);
    }

    /** Convert from PX to DP */
    public static float toDIPFromPixel(float value) {
        return value / DisplayMetricsHolder.getWindowDisplayMetrics().density;
    }

    /** @return {@link float} that represents the density of the display metrics for device screen. */
    public static float getDisplayMetricDensity() {
        return DisplayMetricsHolder.getScreenDisplayMetrics().density;
    }
}
