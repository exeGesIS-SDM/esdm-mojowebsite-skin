﻿<%@ Page Language="vb" AutoEventWireup="false" MasterPageFile="~/App_MasterPages/layout.Master" Inherits="mojoPortal.Web.NonCmsBasePage" %>


<script runat="server">
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        litMessage.Text = "Oops, something went wrong."
        Dim EmailAddress As String = HttpContext.Current.Request.QueryString("email")

        If ValidateEmailAddress(EmailAddress) Then
            If WriteToGdprTable(EmailAddress) Then
                litMessage.Text = "Thanks for opting in!"
                pnlFeedback.CssClass = "success"
            End If
        Else
            litMessage.Text = "Oops, something went wrong - please enter your email here and click ""Opt In"""
            pnlUserEntry.Visible = True
        End If

        litMessage.Visible = True
    End Sub

    Private Function ValidateEmailAddress(emailAddress As String) As Boolean
        Try
            Dim test = New Net.Mail.MailAddress(emailAddress) 'this will throw exception if email address is null or invalid format
            Return True
        Catch ex As Exception
            'Not doing much here!
            Return False
        End Try
    End Function

    Private Function WriteToGdprTable(emailAddress As String) As Boolean
        Try
            Using connection As New System.Data.SqlClient.SqlConnection(ConfigurationManager.AppSettings("MSSQLConnectionString"))

                Dim myCommand As System.Data.SqlClient.SqlCommand = connection.CreateCommand()
                myCommand.CommandText = "INSERT INTO [dbo].[esdm_OptIn] ([email],[optindatetime],[ipaddress]) VALUES (@p1,@p2,@p3)"
                myCommand.Parameters.AddWithValue("@p1", emailAddress)
                myCommand.Parameters.AddWithValue("@p2", DateTime.Now())
                myCommand.Parameters.AddWithValue("@p3", HttpContext.Current.Request.UserHostAddress)
                myCommand.CommandTimeout = 30
                myCommand.CommandType = System.Data.CommandType.Text

                connection.Open()
                myCommand.ExecuteNonQuery()
                Return True
            End Using
        Catch ex As Exception
            'Not doing much here!
            Return False
        End Try
    End Function

    Protected Sub btnSubmit_Click(sender As Object, e As EventArgs)
        If ValidateEmailAddress(txtEmailAddress.Text) Then
            If WriteToGdprTable(txtEmailAddress.Text) Then
                litMessage.Text = "Thanks for opting in!"
                pnlFeedback.CssClass = "success"
                pnlUserEntry.Visible = False
            End If
        Else
            litMessage.Text = "Oops, something went wrong."
        End If
    End Sub
</script>

<asp:Content ID="Content1" ContentPlaceHolderID="mainContent" runat="server">
    <style>
        .success {
            width:100%;
            font-size:xx-large;
            text-align:center;
            color:white;
            background-color:#00b050;
        }
</style>
    <div>
        <asp:Panel ID="pnlFeedback" runat="server">
            <asp:Literal ID="litMessage" runat="server" Text="" />
        </asp:Panel>

        <asp:Panel ID="pnlUserEntry" runat="server" Visible="false">
            <asp:TextBox ID="txtEmailAddress" runat="server" AutoCompleteType="Email" TextMode="SingleLine" Text="" />
            <asp:Button runat="server" ID="btnSubmit" Text="Opt In" OnClick="btnSubmit_Click" />
        </asp:Panel>
    </div>
</asp:Content>
