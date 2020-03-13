Imports React

Public Class Contact
    Inherits Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        Dim env = ReactEnvironment.Current
        env.GetInitJavaScript()
        Dim objectModel = New With {Key .test = "route2"}
        Dim reactComponent = env.CreateComponent("Route2", objectModel)
        route2.Text = reactComponent.RenderHtml()
    End Sub
End Class