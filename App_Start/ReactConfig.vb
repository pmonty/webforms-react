Imports React
Imports JavaScriptEngineSwitcher.Core
Imports JavaScriptEngineSwitcher.V8

<Assembly: WebActivatorEx.PreApplicationStartMethod(GetType(ReactConfig), "Configure")>

Public Module ReactConfig

    Sub Configure()

#If DEBUG Then
        ReactSiteConfiguration.
            Configuration.
            SetReuseJavaScriptEngines(False).
            AddScript("~/ClientApp/Route1/index.tsx").
            AddScript("~/ClientApp/Route2/index.tsx").
            AddScript("~/ClientApp/Route1/component.tsx")
#Else
        ReactSiteConfiguration.
                Configuration.
                SetReuseJavaScriptEngines(True).
                AddScriptWithoutTransform("~/Clientapp/dist/routes.bundle.js")
#End If

        JsEngineSwitcher.Current.DefaultEngineName = V8JsEngine.EngineName
        JsEngineSwitcher.Current.EngineFactories.AddV8()

    End Sub

End Module

