<%@ Page Language="C#" AutoEventWireup="false" CodeBehind="FormResultsBrowse.aspx.cs"
    Inherits="sts.FormWizard.Web.UI.FormResultsBrowsePage" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
	
    <portal:StyleSheetCombiner ID="StyleSheetCombiner" runat="server" />
    <portal:IEStyleIncludes ID="IEStyleIncludes1" runat="server" IncludeHtml5Script="false" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" crossorigin="anonymous">
</head>
<body class="dialogpage">
    <form id="form1" runat="server">
    <portal:mojoCutePager ID="pgr" runat="server" ShowFirstLast="true" />
    <div class="settingrow">
    <asp:Button ID="btnDelete" runat="server" />
    <asp:Literal ID="litTimestamp" runat="server" />
    </div>
    
    <div class="formwizardresults">
    <NeatHtml:UntrustedContent ID="UntrustedContent2" runat="server" TrustedImageUrlPattern='<%# allowedImageUrlRegexPattern %>'>
        <asp:Literal ID="litResult" runat="server" />
        </NeatHtml:UntrustedContent>
    </div>
    <div id="divAttachments" runat="server" class="settingrow">
        <mp:mojoGridView ID="grdAttachments" runat="server" CssClass="" AutoGenerateColumns="false"
            DataKeyNames="RowGuid">
            <Columns>
                <asp:TemplateField>
                    <ItemTemplate>
                        <%# Eval("FileName") %>
                        <asp:ImageButton ID="btnDownload" runat="server" ImageUrl='<%# ImageBaseUrl + "/Data/SiteImages/Download.gif" %>'
                            CommandName="download" CommandArgument='<%# Eval("RowGuid").ToString() + "~" + Eval("ServerFileName").ToString() %>' AlternateText='<%# Resources.FormWizardResources.DownloadLink %>' />
                        <asp:Button ID="btnDelete" runat="server" Visible='<%# allowDelete %>' CommandName="delete" CommandArgument='<%# Eval("RowGuid").ToString() + "~" + Eval("ServerFileName").ToString() %>'
                            Text='<%# Resources.FormWizardResources.Delete %>' />
                    </ItemTemplate>
                </asp:TemplateField>
            </Columns>
        </mp:mojoGridView>
    </div>

    </form>
</body>
</html>
