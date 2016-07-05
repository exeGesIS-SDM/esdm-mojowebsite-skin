﻿<%@ Control Language="C#" AutoEventWireup="false" CodeBehind="CountryStateSetting.ascx.cs" Inherits="mojoPortal.Web.UI.CountryStateSetting" %>

<asp:UpdatePanel ID="UpdatePanel1" UpdateMode="Conditional" runat="server">
<ContentTemplate>
<div class="settingrow">
    <asp:DropDownList ID="ddCountry" runat="server" AutoPostBack="true" DataValueField="ISOCode2" DataTextField="Name" EnableTheming="false">
    </asp:DropDownList>
</div>
<div class="settingrow">
    <asp:DropDownList ID="ddGeoZone" runat="server" DataValueField="Code" DataTextField="Name"
        AutoPostBack="true" EnableTheming="false">
    </asp:DropDownList>
</div>
</ContentTemplate>
</asp:UpdatePanel>