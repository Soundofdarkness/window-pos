#include <napi.h>
#include <windows.h>
#include <dwmapi.h>

#pragma comment(lib, "dwmapi.lib")

// https://stackoverflow.com/questions/27220/how-to-convert-stdstring-to-lpcwstr-in-c-unicode
std::wstring s2ws(const std::string& s){
    int len;
    int slength = (int)s.length() + 1;
    len = MultiByteToWideChar(CP_ACP, 0, s.c_str(), slength, 0, 0); 
    wchar_t* buf = new wchar_t[len];
    MultiByteToWideChar(CP_ACP, 0, s.c_str(), slength, buf, len);
    std::wstring r(buf);
    delete[] buf;
    return r;
}

Napi::Value GetWindowCoords(const Napi::CallbackInfo& info){
    Napi::Env env = info.Env();

    if(info.Length() != 1){
        Napi::TypeError::New(env, "Wrong Number of Arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    if(!info[0].IsString()){
        Napi::TypeError::New(env, "Argument is not a string!").ThrowAsJavaScriptException();
        return env.Null();
    }

    std::string windowName = info[0].As<Napi::String>().Utf8Value();

    HWND hWnd = FindWindow(0, (LPCSTR)windowName.c_str());

    if(hWnd == 0){
        return env.Null();
    }

    RECT r;
    HRESULT stat = DwmGetWindowAttribute(hWnd, DWMWA_EXTENDED_FRAME_BOUNDS, &r, sizeof(r));
    if(stat != S_OK){
        Napi::Error::New(env, "Failed to get Window Bounds").ThrowAsJavaScriptException();
        return env.Null();
    }

    Napi::Object returnObj = Napi::Object::New(env);
    returnObj.Set("top",  double_t(r.top));
    returnObj.Set("bottom", double_t(r.bottom));
    returnObj.Set("left", double_t(r.left));
    returnObj.Set("right", double_t(r.right));

    return returnObj;
}

Napi::Object Init(Napi::Env env, Napi::Object exports){
    exports.Set("getWindowCoords", Napi::Function::New(env, GetWindowCoords));
    return exports;
}

NODE_API_MODULE(addon, Init);
