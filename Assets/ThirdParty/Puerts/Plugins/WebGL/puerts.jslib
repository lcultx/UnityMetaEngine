var exportDLL = {
    _Init: function () {
        var global = typeof global != 'undefined' ? global : window;
        global.PuertsWebGL.Init({
            UTF8ToString: UTF8ToString,
            _malloc: _malloc,
            _memcpy: _emscripten_memcpy_big,
            _memset: _memset,
            _free: _free,
            stringToUTF8: stringToUTF8,
            lengthBytesUTF8: lengthBytesUTF8,
            
            unityInstance: Module,
        });

    }
};


[
    "SetCallV8",
    "GetLibVersion",
    "GetLibBackend",
    "CreateJSEngine",
    "CreateJSEngineWithExternalEnv",
    "DestroyJSEngine",
    "SetGlobalFunction",
    "GetLastExceptionInfo",
    "LowMemoryNotification",
    "SetGeneralDestructor",
    "SetModuleResolver",
    "ExecuteModule",
    "Eval",
    "_RegisterClass",
    "RegisterStruct",
    "RegisterFunction",
    "RegisterProperty",
    "ReturnClass",
    "ReturnObject",
    "ReturnNumber",
    "ReturnString",
    "ReturnBigInt",
    "ReturnBoolean",
    "ReturnDate",
    "ReturnNull",
    "ReturnFunction",
    "ReturnJSObject",
    "ReturnArrayBuffer",
    "GetArgumentType",
//    "GetArgumentValue",
    "GetJsValueType",
    "GetTypeIdFromValue",
    "GetNumberFromValue",
    "GetDateFromValue",
    "GetStringFromValue",
    "GetBooleanFromValue",
    "ValueIsBigInt",
    "GetBigIntFromValue",
    "GetObjectFromValue",
    "GetFunctionFromValue",
    "GetJSObjectFromValue",
    "GetArrayBufferFromValue",
    "SetNumberToOutValue",
    "SetDateToOutValue",
    "SetStringToOutValue",
    "SetBooleanToOutValue",
    "SetBigIntToOutValue",
    "SetObjectToOutValue",
    "SetNullToOutValue",
    "SetArrayBufferToOutValue",
    "ThrowException",
    "PushNullForJSFunction",
    "PushDateForJSFunction",
    "PushBooleanForJSFunction",
    "PushBigIntForJSFunction",
    "PushStringForJSFunction",
    "__PushStringForJSFunction",
    "PushNumberForJSFunction",
    "PushObjectForJSFunction",
    "PushJSFunctionForJSFunction",
    "PushJSObjectForJSFunction",
    "PushArrayBufferForJSFunction",
    "InvokeJSFunction",
    "GetFunctionLastExceptionInfo",
    "ReleaseJSFunction",
    "ReleaseJSObject",
    "GetResultType",
    "GetNumberFromResult",
    "GetDateFromResult",
    "GetStringFromResult",
    "GetBooleanFromResult",
    "ResultIsBigInt",
    "GetBigIntFromResult",
    "GetObjectFromResult",
    "GetTypeIdFromResult",
    "GetFunctionFromResult",
    "GetJSObjectFromResult",
    "GetArrayBufferFromResult",
    "ResetResult",
    "CreateInspector",
    "DestroyInspector",
    "InspectorTick",
    "LogicTick",
    "SetLogCallback",
].forEach(function (methodName) {

    exportDLL[methodName] = new Function("var global = typeof global != 'undefined' ? global : window; global.PuertsWebGL.bridgeLog && console.log('WebGL DLL:" + methodName + "'); return global.PuertsWebGL['" + methodName + "'].apply(this, arguments)");
})

mergeInto(LibraryManager.library, exportDLL);