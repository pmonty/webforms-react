<%@ Page Title="About" Language="VB" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="About.aspx.vb" Inherits="WebForms_React.About" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2><%: Title %>.</h2>
    <p>Your app description page.</p>
    <p>Use this area to provide additional information.</p>
    <asp:Literal ID="route1" runat="server"></asp:Literal>
    <script src="~/Clientapp/dist/routes.bundle.js"></script>
</asp:Content>
