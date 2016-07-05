﻿<%@ Page Language="C#" AutoEventWireup="false" MasterPageFile="~/App_MasterPages/layout.Master" CodeBehind="SalesSummary.aspx.cs" Inherits="mojoPortal.Web.AdminUI.SalesSummaryPage" %>

<asp:Content ContentPlaceHolderID="leftContent" ID="MPLeftPane" runat="server" />
<asp:Content ContentPlaceHolderID="mainContent" ID="MPContent" runat="server">
<portal:AdminCrumbContainer ID="pnlAdminCrumbs" runat="server" CssClass="breadcrumbs">
<asp:HyperLink ID="lnkAdminMenu" runat="server" NavigateUrl="~/Admin/AdminMenu.aspx" /><portal:AdminCrumbSeparator id="AdminCrumbSeparator1" runat="server" Text="&nbsp;&gt;" EnableViewState="false" />
<asp:HyperLink ID="lnkThisPage" runat="server" CssClass="selectedcrumb" />
</portal:AdminCrumbContainer>
<portal:OuterWrapperPanel ID="pnlOuterWrap" runat="server">
<mp:CornerRounderTop id="ctop1" runat="server" EnableViewState="false"  />
<portal:InnerWrapperPanel ID="pnlInnerWrap" runat="server" CssClass="panelwrapper salesummary ">
<portal:HeadingControl ID="heading" runat="server" />
<portal:OuterBodyPanel ID="pnlOuterBody" runat="server">
<portal:InnerBodyPanel ID="pnlInnerBody" runat="server" CssClass="modulecontent">
<strong><asp:Literal ID="litAllTimeRevenue" runat="server" /></strong>
<div>
<div >
    <ajaxToolkit:BarChart ID="bcSales" runat="server" Visible="false" EnableViewState="false" SkinID="SalesSummary" ChartWidth="820" ChartHeight="300"></ajaxToolkit:BarChart>
 <zgw:zedgraphweb id="zgSales" runat="server" RenderMode="ImageTag"
    Width="720" Height="300"></zgw:zedgraphweb>
</div>
<div class="floatpanel">
<div>&nbsp;</div>
<div class="floatpanel">
<mp:mojoGridView ID="grdSales" runat="server"
     AllowPaging="false"
     AllowSorting="false" 
	 AutoGenerateColumns="false">
     <Columns>
		<asp:TemplateField>
			<ItemTemplate>
                <%# Eval("Y") %>
            </ItemTemplate>
		</asp:TemplateField>
		<asp:TemplateField>
			<ItemTemplate>
                <%# Eval("M") %>
            </ItemTemplate>
		</asp:TemplateField>
		<asp:TemplateField>
			<ItemTemplate>
                <%# string.Format(currencyCulture, "{0:c}", Convert.ToDecimal(Eval("Sales"))) %>
            </ItemTemplate>
		</asp:TemplateField>
		
</Columns>
<EmptyDataTemplate>
            <p class="nodata"><asp:Literal id="litempty" runat="server" Text="<%$ Resources:Resource, GridViewNoData %>" /></p>
    </EmptyDataTemplate>
</mp:mojoGridView>
<div>&nbsp;</div>
</div>

<div class="floatpanel">
<mp:mojoGridView ID="grdSalesByModule" runat="server"
     AllowPaging="false"
     AllowSorting="false" 
	 AutoGenerateColumns="false">
     <Columns>
		<asp:TemplateField>
			<ItemTemplate>
                <a href='<%# SiteRoot + "/Admin/SalesByModule.aspx?m=" + Eval("ModuleGuid") %>'><%# Eval("ModuleTitle") %></a>
            </ItemTemplate>
		</asp:TemplateField>
		<asp:TemplateField>
			<ItemTemplate>
                <%# string.Format(currencyCulture, "{0:c}", Convert.ToDecimal(Eval("Sales"))) %>
            </ItemTemplate>
		</asp:TemplateField>
		
</Columns>
<EmptyDataTemplate>
            <p class="nodata"><asp:Literal id="litempty" runat="server" Text="<%$ Resources:Resource, GridViewNoData %>" /></p>
    </EmptyDataTemplate>
</mp:mojoGridView>
</div>

<div class="floatpanel">
<mp:mojoGridView ID="grdTopCustomers" runat="server"
     AllowPaging="false"
     AllowSorting="false" 
	 AutoGenerateColumns="false">
     <Columns>
		<asp:TemplateField>
			<ItemTemplate>
			<asp:HyperLink Text='<%# Resources.Resource.ManageUserLink %>' id="Hyperlink2" 
						    NavigateUrl='<%# SiteRoot + "/Admin/ManageUsers.aspx?userid=" + DataBinder.Eval(Container.DataItem,"UserID")   %>' 
						    Visible="<%# IsAdmin %>" runat="server" />
                <%# Eval("Name") %><br />
                <%# Eval("LoginName") %> - <%# Eval("Email") %>
            </ItemTemplate>
		</asp:TemplateField>
		<asp:TemplateField>
			<ItemTemplate>
			<a href='<%# SiteRoot + "/Admin/SalesCustomerDetail.aspx?u=" + Eval("UserGuid") %>'>
                <%# string.Format(currencyCulture, "{0:c}", Convert.ToDecimal(Eval("Sales"))) %></a>
            </ItemTemplate>
		</asp:TemplateField>
		
</Columns>
<EmptyDataTemplate>
            <p class="nodata"><asp:Literal id="litempty" runat="server" Text="<%$ Resources:Resource, GridViewNoData %>" /></p>
    </EmptyDataTemplate>
</mp:mojoGridView>
<div><asp:HyperLink ID="lnkAllItems" runat="server" /></div>
<div>&nbsp;</div>
</div>

</div>

</div>
</portal:InnerBodyPanel>
</portal:OuterBodyPanel>
<portal:EmptyPanel id="divCleared" runat="server" CssClass="cleared" SkinID="cleared"></portal:EmptyPanel>
</portal:InnerWrapperPanel> 
<mp:CornerRounderBottom id="cbottom1" runat="server" EnableViewState="false" />	
</portal:OuterWrapperPanel>
</asp:Content>
<asp:Content ContentPlaceHolderID="rightContent" ID="MPRightPane" runat="server" />
<asp:Content ContentPlaceHolderID="pageEditContent" ID="MPPageEdit" runat="server" />
