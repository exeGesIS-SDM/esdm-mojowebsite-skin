<%@ Page Language="C#" AutoEventWireup="false" CodeBehind="FormResultsGrid.aspx.cs" Inherits="sts.FormWizard.Web.UI.FormResultsGridPage" %>

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
    <asp:ScriptManager ID="ScriptManager1" EnablePageMethods="true" runat="server" />
    <div class="formResults clear">
        <asp:UpdatePanel ID="UpdatePanel1" UpdateMode="Conditional" runat="server">
            <ContentTemplate>
                <mp:mojoGridView ID="grdResults" runat="server"  AllowSorting="true"
                     AutoGenerateColumns="true" CssClass="editgrid">
                </mp:mojoGridView>
            </ContentTemplate>
        </asp:UpdatePanel>
    </div>
    </form>
</body>
</html>
