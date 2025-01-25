# Unexpected NaN result when using undefined instead of null

This repository demonstrates an unexpected behavior in JavaScript when using `undefined` values in a function that explicitly handles `null` values. The function `foo` is designed to handle `null` inputs by returning `null`; however, it produces `NaN` when given `undefined` inputs.

## Problem

The issue stems from the loose comparison using the strict equality operator (`===`). The function correctly returns `null` when `null` is passed, but it does not explicitly handle `undefined`. Consequently, the addition operation (`a + b`) results in `NaN` when either `a` or `b` is `undefined`.

## Solution

The solution involves explicitly checking for both `null` and `undefined` values using the loose equality operator (`==`) or strict equality operator (`===`) and providing appropriate handling to avoid the `NaN` output.