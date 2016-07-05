<%@ Page language="c#" Codebehind="ViewPost.aspx.cs" MasterPageFile="~/App_MasterPages/layout.Master" AutoEventWireup="false" Inherits="mojoPortal.Web.BlogUI.BlogView" MaintainScrollPositionOnPostback="true" %>
<%@ Register TagPrefix="blog" TagName="BlogView" Src="~/Blog/Controls/BlogViewControl.ascx" %>

<asp:Content ContentPlaceHolderID="leftContent" ID="MPLeftPane" runat="server" >
</asp:Content>
<asp:Content ContentPlaceHolderID="mainContent" ID="MPContent" runat="server">
<portal:OuterWrapperPanel ID="pnlOuterWrap" runat="server">
<mp:CornerRounderTop id="ctop1" runat="server"  />
<blog:BlogView id="BlogView1" runat="server" />
<mp:CornerRounderBottom id="cbottom1" runat="server" />	
</portal:OuterWrapperPanel>
</asp:Content>
<asp:Content ContentPlaceHolderID="rightContent" ID="MPRightPane"  runat="server" >
</asp:Content>
<asp:Content ContentPlaceHolderID="pageEditContent" ID="MPPageEdit" runat="server" />
