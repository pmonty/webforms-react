Imports React

Public Class About
    Inherits Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        Dim env = ReactEnvironment.Current
        env.GetInitJavaScript()
        Dim objectModel = New With {Key .test = "route1"}
        Dim reactComponent = env.CreateComponent("Route1", objectModel)
        route1.Text = reactComponent.RenderHtml()
    End Sub

End Class