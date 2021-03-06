---
title: First Steps
page_title: Getting Started on Visual Studio
description: "Create a sample project on Visual Studio with Progress Telerik UI for ASP.NET MVC."
slug: gettingstarted_aspnetmvc
previous_url: /getting-started/asp-net-mvc-5
position: 1
permalink: /getting-started/first-steps
---

# First Steps

Welcome to the First Steps guide on getting started with Progress<sup>®</sup> Telerik<sup>®</sup> UI for ASP.NET MVC with Visual Studio!

The guide creates a use-case scenario which demonstrates how to start working with the suite and implements the Kendo UI DatePicker for ASP.NET MVC in your project by using the Telerik UI DatePicker HtmlHelper. For its purposes, the guide uses Visual Studio for Windows 2019.

To configure an ASP.NET MVC web application to use UI for ASP.NET MVC, you can use either of the following approaches:
* (Demonstrated in this guide) Create the application from scratch and manually add the necessary setup.
* [Use the Telerik UI for ASP.NET MVC Visual Studio extensions]({% slug newprojectwizards_visualstudio_aspnetmvc %}) and create an application that has all necessary scripts, styles, and editor templates.

To get up and running with the project:

1. [Download the controls](https://www.telerik.com/download-trial-file/v2-b/ui-for-asp.net-mvc)
1. [Create the ASP.NET MVC Web Application](#creating-the-application)
1. [Add the Telerik NuGet Feed to Visual Studio](#add-the-telerik-nuget-feed-to-visual-studio)
1. [Add the UI for ASP.NET MVC NuGet package](#adding-the-nuget-package)
1. [Include the Telerik UI for ASP.NET MVC client-side resources](#including-the-client-side-resources)
1. [Reference the `Kendo.Mvc.dll` assembly](#adding-the-kendo.mvc.dll-reference)
1. [Update the `web.config` file of the application](#updating-the-web.config-file)
1. [Set the HtmlHelper initialization](#setting-the-htmlhelper-initialization)

## Creating the Application

1. Open Visual Studio for Windows 2019 and select **Create a New Project**.
1. Select **ASP.NET Web Application (.NET Framework)** and click **Next**.
1. Set a name and location for the project and click **Create**.
1. Select **MVC** and click **Create**.

## Add the Telerik NuGet Feed to Visual Studio

 * Add the Telerik NuGet Feed for Trial License Users
 * Add the Telerik NuGet Feed for Users with Commercial License 
	
### Add the Telerik NuGet Feed for Trial License Users

1. If you don't have an active license, download an [UI for ASP.NET MVC trial](https://www.telerik.com/aspnet-mvc). During the installation of the components, you can setup the [Telerik NuGet]({% slug aspnetmvc_nuget %}) feed to be added automatically - check the "Set up Telerik NuGet package source" checkbox:

	![NuGet checkbox in Progress Trial Installer](../getting-started-mvc/images/check-nuget.png)
	
### Add the Telerik NuGet Feed for Users with Commercial License

1. If you have an active commercial UI for ASP.NET MVC license, you can automatically set up the NuGet Feed through the Progress Control Panel. Download the Progress Control Panel from the Overview page of your Telerik account. 

	![Download Progress Control Panel](../getting-started-mvc/images/download-control-panel.png)
	
1. When logging in the Progress Control Panel, check the "set up Telerik NuGet package source" option.

	![Set Up Nuget on Progress Control Panel Login](../getting-started-mvc/images/login-control-panel.png)
	
	If you miss to set up the Nuget Feed on login, go to the Progress Control Panel options and scroll to **Nuget Settings**. Enter your Telerik credentials and click `Save and Close` button.
	
	![Set Up Nuget on Progress Control Panel options](../getting-started-mvc/images/nuget-control-panel-options.png)
	
	## Adding the NuGet Package

1. Open the NuGet Package Manager.

	![Locating and opening the NuGet package manager menu](../getting-started-mvc/images/manage-nuget.png)

1. Click the **Browse** tab and search for `Telerik.UI.for.AspNet.MVC` to install it. 

	![Selecting and installing the NuGet package](../getting-started-mvc/images/install-nuget-mvc.png)

## Including the Client-Side Resources

> * The CDN links and/or package versions have to point to the same UI for ASP.NET MVC version which your project references.
> * The Kendo UI scripts have to be placed after `jQuery`.

To include the necessary Telerik UI for ASP.NET MVC JavaScript and CSS files:

1. Go to `~\Views\Shared\_Layout.cshtml` and add the theme of your choice to the `<head>` of the document. Since the Microsoft project uses Bootstrap, you can use the Kendo UI SASS Bootstrap v4 theme to match it.

1. The Microsoft ASP.NET Web Application template comes with a `jQuery` script reference at the end of _Layout.cshtml file:

		@Scripts.Render("~/bundles/jquery")

Find it and remove it. The Kendo UI script files required by UI for ASP.NET Core must be loaded in the `<head>` tag after the `jQuery` script.

1. Copy and paste the scripts from the snippet bellow to the `<head>` tag in the _Layout. The content of the `<head>` tag with the theme file and the script files included should look as shown in the snippet below. `kendo.all.min.js` and `kendo.aspnetmvc.min.js` script files have to be loaded after the `jquery.min.js` script. `jQuery` should be loaded only once in the `<head>` tag. Make sure there are no duplicate references elsewhere in the _Layout.

		<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>@ViewBag.Title - My Telerik MVC Application</title>

		<link href="https://kendo.cdn.telerik.com/{{ site.mvcCoreVersion }}/styles/kendo.bootstrap-v4.min.css" rel="stylesheet" type="text/css" />
		<link href="@Url.Content("~/Content/bootstrap.min.css")" rel="stylesheet" type="text/css" />
		<link href="@Url.Content("~/Content/Site.css")" rel="stylesheet" type="text/css" />

		<script src="https://kendo.cdn.telerik.com/{{ site.mvcCoreVersion }}/js/jquery.min.js"></script>
		<script src="https://kendo.cdn.telerik.com/{{ site.mvcCoreVersion }}/js/jszip.min.js"></script>
		<script src="https://kendo.cdn.telerik.com/{{ site.mvcCoreVersion }}/js/kendo.all.min.js"></script>
		<script src="https://kendo.cdn.telerik.com/{{ site.mvcCoreVersion }}/js/kendo.aspnetmvc.min.js"></script>
		<script src="@Url.Content("~/Scripts/bootstrap.min.js")"></script>
		</head>

## Adding the Kendo.Mvc.dll Reference

The `Kendo.Mvc.dll` assembly contains the Telerik UI for ASP.NET MVC helpers. `Kendo.Mvc.dll` depends on the latest version of `System.Web.Mvc`. If the application uses a previous MVC version, [upgrade to the latest version](https://www.nuget.org/packages/Microsoft.AspNet.Mvc/).

1. Right-click the **References** node in **Solution Explorer**. Click **Add Reference**.
1. Select the **Browse** tab of the **Add Reference** dialog. Navigate to the install location of Telerik UI for ASP.NET MVC.
1. Navigate to `wrappers/aspnetmvc/Binaries/MVC5`. This directory contains the ASP.NET MVC 5 version of Telerik UI for ASP.NET MVC.
1. Select `Kendo.Mvc.dll`. Click **OK**.

Alternatively, use the following approach:

1. Copy the assembly from the Telerik UI for ASP.NET MVC install location.
1. Paste the assembly in the `bin` folder of the application.
1. Add a reference to the assembly in Visual Studio.

## Updating the web.config File

By updating the `web.config` file of the web application you indicate the `Kendo.Mvc.UI` namespace where the helpers are located. For issues related to unmatching `System.Web.Mvc` versions, refer to the [article on troubleshooting]({% slug troubleshooting_aspnetmvc %}).

1. Open `Views/Web.config` or, if using ASPX, the root `Web.config` file.
1. Locate the `namespaces` tag.
1. Append an `add` tag to the `namespaces` tag.

        <namespaces>
            <add namespace="System.Web.Mvc" />
            <add namespace="System.Web.Mvc.Ajax" />
            <add namespace="System.Web.Mvc.Html" />
            <add namespace="System.Web.Routing" />
            <add namespace="Kendo.Mvc.UI" />
        </namespaces>

1. Add a binding redirect to your current `System.Web.Mvc` version.

        <configuration>
            <runtime>
                <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
                    <dependentAssembly>
                        <assemblyIdentity name="System.Web.Mvc" publicKeyToken="31bf3856ad364e35" />
                        <bindingRedirect oldVersion="1.0.0.0-5.2.7.0" newVersion="5.2.7.0" />
                    </dependentAssembly>
                </assemblyBinding>
            </runtime>
        </configuration>

## Setting the HtmlHelper Initialization

When you use a Kendo UI widget through its MVC server-side wrapper initialization:

1. Create a model in the `Models` folder of the application.

        public class Product
        {
            public int ProductID { get; set; }
            public string ProductName { get; set; }
            public Nullable<decimal> UnitPrice { get; set; }
            public bool Discontinued { get; set; }
        }

1. Open the `~/Views/Home/Index.cshtml` view or, if using ASPX, the `Index.aspx` file.
1. Add a Kendo UI Grid HtmlHelper.

    ```Razor
        <div class="text-center">
			<h2>Kendo UI Grid</h2>
			@(Html.Kendo().Grid<TelerikMvcApp1.Models.Product>()
				.Name("grid")
				.Columns(columns =>
				{
					columns.Bound(c => c.ProductID).Width(100);
					columns.Bound(c => c.ProductName).Width(300);
					columns.Bound(c => c.UnitPrice).Width(100);
					columns.Bound(c => c.Discontinued).Width(200);
				})
				.DataSource(dataSource => dataSource
					.Ajax()
					.Read(read => read.Action("Select", "Home"))
				)
			)
		</div>
    ```

1. Open the `HomeController.cs` and add a new action method which will return the data as JSON. The Grid makes Ajax requests to this action. Import the `Kendo.Mvc.UI` and the `Kendo.Mvc.Extensions` namespaces do that you can use `Kendo.Mvc.UI.DataSourceRequest` and the `ToDataSourceResult` extension method.

        public ActionResult Select([DataSourceRequest]DataSourceRequest request)
        {
            var data = Enumerable.Range(1, 10)
                .Select(index => new Product
                {
                    ProductID = index,
                    ProductName = "Product #" + index,
                    UnitPrice = index * 10,
                    Discontinued = false
                });

            return Json(data.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }

1. Press `CTRL+F5` to build and run the application. As a result, the following sample page is created.

    ![Sample page](../getting-started-mvc/images/sample-page.png)

## Next Steps

* [Explore the Telerik UI for ASP.NET MVC fundamentals]({% slug fundamentals_aspnetmvc %})
* [Install Telerik UI for ASP.NET MVC with NuGet]({% slug aspnetmvc_nuget %})
* [Scaffold the Telerik UI for ASP.NET MVC project]({% slug scaffolding_aspnetmvc %})
* [Integrate Telerik UI for ASP.NET MVC in Visual Studio]({% slug overview_visualstudio_aspnetmvc %})
* [Upgrade Telerik UI for ASP.NET MVC]({% slug upgrade_aspnetcore %})

## See Also

* [Exploring the Helper Script Dependencies]({% slug script_filesfor_barcodes_widgets %})
* [Collected Examples on ASP.NET MVC](https://github.com/telerik/kendo-examples-asp-net-mvc)
* [Collected Examples on ASP.NET Web Technologies](https://github.com/telerik/kendo-examples-asp-net)
* [Collected Examples on Telerik UI for ASP.NET MVC](https://github.com/telerik/ui-for-aspnet-mvc-examples)
