<%@ Page Language="vb" AutoEventWireup="false" MasterPageFile="~/App_MasterPages/layout.Master"  Inherits="mojoPortal.Web.NonCmsBasePage" %>
       <script runat="server">
           Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
               litMessage.Text = "Oops, something went wrong"
               Dim EmailAddress As String = HttpContext.Current.Request.QueryString("email")
               If ValidateEmailAddress(EmailAddress) Then
                   If WriteToGdprTable(EmailAddress) Then
                       litMessage.Text = "Thanks for opting in!"
                   End If
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
                       myCommand.CommandText = "INSERT INTO [dbo].[esdm_OptIn] ([email],[optindatetime]) VALUES (@p1,@p2)"
                       myCommand.Parameters.AddWithValue("@p1", emailAddress)
                       myCommand.Parameters.AddWithValue("@p2", DateTime.Now())
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

    </script> 

<asp:content id="Content1" contentplaceholderid="mainContent" runat="server">
    <div>
        <p>
            <asp:Literal ID="litMessage" runat="server" Text="" /></p>
    </div>
</asp:content>
