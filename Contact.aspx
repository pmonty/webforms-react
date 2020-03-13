<%@ Page Title="Contact" Language="VB" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Contact.aspx.vb" Inherits="WebForms_React.Contact" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2><%: Title %></h2>
    <p>Your contact page.</p>
    <asp:Literal ID="route2" runat="server"></asp:Literal>
    <script src="~/Clientapp/dist/routes.bundle.js"></script>
</asp:Content>
