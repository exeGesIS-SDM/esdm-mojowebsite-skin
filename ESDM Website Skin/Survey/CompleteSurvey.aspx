<%@ Page Language="C#" AutoEventWireup="false" MasterPageFile="~/App_MasterPages/layout.Master" CodeBehind="CompleteSurvey.aspx.cs" Inherits="SurveyFeature.UI.CompleteSurveyPage" %>

<asp:Content ContentPlaceHolderID="leftContent" ID="MPLeftPane" runat="server" />
<asp:Content ContentPlaceHolderID="mainContent" ID="MPContent" runat="server">
<portal:OuterWrapperPanel ID="pnlOuterWrap" runat="server">
<mp:CornerRounderTop id="ctop1" runat="server" />
<portal:InnerWrapperPanel ID="pnlInnerWrap" runat="server" CssClass="panelwrapper survey">
<portal:HeadingControl ID="heading" runat="server" />
<portal:OuterBodyPanel ID="pnlOuterBody" runat="server">
<portal:InnerBodyPanel ID="pnlInnerBody" runat="server" CssClass="modulecontent">
<asp:Panel ID="pnlQuestions" runat="server" >    
</asp:Panel>
<div class="settingrow">
    <mp:SiteLabel ID="SiteLabel1" runat="server" CssClass="settinglabel" ConfigKey="spacer" UseLabelTag="false" />
    <portal:mojoButton ID="btnSurveyBack" runat="server"  CausesValidation="false" />
    <portal:mojoButton ID="btnSurveyForward" runat="server" />
</div>
</portal:InnerBodyPanel>
</portal:OuterBodyPanel>
<portal:EmptyPanel id="divCleared" runat="server" CssClass="cleared" SkinID="cleared"></portal:EmptyPanel>
</portal:InnerWrapperPanel>
<mp:CornerRounderBottom id="cbottom1" runat="server" />
</portal:OuterWrapperPanel>
</asp:Content>
<asp:Content ContentPlaceHolderID="rightContent" ID="MPRightPane" runat="server" />
<asp:Content ContentPlaceHolderID="pageEditContent" ID="MPPageEdit" runat="server" />
