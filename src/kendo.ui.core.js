(function(f, define){
    define([
        "./kendo.core",
        "./kendo.router",
        "./kendo.touch",
        "./kendo.view",
        "./kendo.floatinglabel",
        "./kendo.fx",
        "./kendo.data.odata",
        "./kendo.data.xml",
        "./kendo.data",
        "./kendo.data.signalr",
        "./kendo.binder",
        "./kendo.validator",
        "./kendo.userevents",
        "./kendo.draganddrop",
        "./kendo.mobile.scroller",
        "./kendo.resizable",
        "./kendo.sortable",
        "./kendo.selectable",
        "./kendo.badge",
        "./kendo.button",
        "./kendo.pager",
        "./kendo.popup",
        "./kendo.notification",
        "./kendo.tooltip",
        "./kendo.toolbar",
        "./kendo.list",
        "./kendo.calendar",
        "./kendo.dateinput",
        "./kendo.datepicker",
        "./kendo.autocomplete",
        "./kendo.dropdownlist",
        "./kendo.combobox",
        "./kendo.multiselect",
        "./kendo.colorpicker",
        "./kendo.listview",
        "./kendo.listbox",
        "./kendo.textbox",
        "./kendo.textarea",
        "./kendo.numerictextbox",
        "./kendo.maskedtextbox",
        "./kendo.menu",
        "./kendo.editable",
        "./kendo.panelbar",
        "./kendo.progressbar",
        "./kendo.responsivepanel",
        "./kendo.tabstrip",
        "./kendo.timepicker",
        "./kendo.datetimepicker",
        "./kendo.slider",
        "./kendo.splitter",
        "./kendo.dialog",
        "./kendo.window",
        "./kendo.virtuallist",
        "./kendo.mobile.popover",
        "./kendo.mobile.loader",
        "./kendo.mobile.scroller",
        "./kendo.mobile.shim",
        "./kendo.mobile.view",
        "./kendo.mobile.modalview",
        "./kendo.mobile.drawer",
        "./kendo.mobile.splitview",
        "./kendo.mobile.pane",
        "./kendo.mobile.application",
        "./kendo.mobile.actionsheet",
        "./kendo.mobile.button",
        "./kendo.mobile.buttongroup",
        "./kendo.mobile.collapsible",
        "./kendo.mobile.listview",
        "./kendo.mobile.navbar",
        "./kendo.mobile.scrollview",
        "./kendo.mobile.switch",
        "./kendo.mobile.tabstrip",
        "./kendo.angular"
    ], f);
})(function(){
    "bundle all";
    return window.kendo;
}, typeof define == 'function' && define.amd ? define : function(a1, a2, a3){ (a3 || a2)(); });
