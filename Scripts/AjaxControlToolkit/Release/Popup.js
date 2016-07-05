﻿Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.PopupBehavior=function(n){Sys.Extended.UI.PopupBehavior.initializeBase(this,[n]);this._x=0;this._y=0;this._positioningMode=Sys.Extended.UI.PositioningMode.Absolute;this._parentElement=null;this._parentElementID=null;this._moveHandler=null;this._firstPopup=!0;this._originalParent=null;this._visible=!1;this._unselectable=null;this._onShow=null;this._onHide=null;this._onShowEndedHandler=Function.createDelegate(this,this._onShowEnded);this._onHideEndedHandler=Function.createDelegate(this,this._onHideEnded)};Sys.Extended.UI.PopupBehavior.prototype={initialize:function(){Sys.Extended.UI.PopupBehavior.callBaseMethod(this,"initialize");this._hidePopup();this.get_element().style.position="absolute"},dispose:function(){var n=this.get_element();n&&(this._visible&&this.hide(),this._originalParent&&(n.parentNode.removeChild(n),this._originalParent.appendChild(n),this._originalParent=null),n._hideWindowedElementsIFrame=null);this._parentElement=null;this._onShow&&this._onShow.get_animation()&&this._onShow.get_animation().remove_ended(this._onShowEndedHandler);this._onShow=null;this._onHide&&this._onHide.get_animation()&&this._onHide.get_animation().remove_ended(this._onHideEndedHandler);this._onHide=null;Sys.Extended.UI.PopupBehavior.callBaseMethod(this,"dispose")},show:function(){var n,t;this._visible||(n=new Sys.CancelEventArgs,this.raise_showing(n),n.get_cancel())||(this._visible=!0,t=this.get_element(),$common.setVisible(t,!0),this.setupPopup(),this._onShow?($common.setVisible(t,!1),this.onShow()):this.raise_shown(Sys.EventArgs.Empty))},hide:function(){if(this._visible){var n=new Sys.CancelEventArgs;(this.raise_hiding(n),n.get_cancel())||(this._visible=!1,this._onHide?this.onHide():(this._hidePopup(),this._hideCleanup()))}},getBounds:function(){var i=this.get_element(),s=i.offsetParent||document.documentElement,f,n,e,r,u,o,t;this.get_parentElement()?(n=$common.getBounds(this.get_parentElement()),e=$common.getLocation(s),f={x:n.x-e.x,y:n.y-e.y}):(n=$common.getBounds(s),f={x:0,y:0});r=i.offsetWidth-(i.clientLeft?i.clientLeft*2:0);u=i.offsetHeight-(i.clientTop?i.clientTop*2:0);this._firstpopup&&(i.style.width=r+"px",this._firstpopup=!1);switch(this._positioningMode){case Sys.Extended.UI.PositioningMode.Center:t={x:Math.round(n.width/2-r/2),y:Math.round(n.height/2-u/2),altX:Math.round(n.width/2-r/2),altY:Math.round(n.height/2-u/2)};break;case Sys.Extended.UI.PositioningMode.BottomLeft:t={x:0,y:n.height,altX:n.width-r,altY:0-u};break;case Sys.Extended.UI.PositioningMode.BottomRight:t={x:n.width-r,y:n.height,altX:0,altY:0-u};break;case Sys.Extended.UI.PositioningMode.TopLeft:t={x:0,y:-i.offsetHeight,altX:n.width-r,altY:n.height};break;case Sys.Extended.UI.PositioningMode.TopRight:t={x:n.width-r,y:-i.offsetHeight,altX:0,altY:n.height};break;case Sys.Extended.UI.PositioningMode.Right:t={x:n.width,y:0,altX:-i.offsetWidth,altY:n.height-u};break;case Sys.Extended.UI.PositioningMode.Left:t={x:-i.offsetWidth,y:0,altX:n.width,altY:n.height-u};break;default:t={x:0,y:0,altX:0,altY:0}}return t.x+=this._x+f.x,t.altX+=this._x+f.x,t.y+=this._y+f.y,t.altY+=this._y+f.y,o=this._verifyPosition(t,r,u,n),new Sys.UI.Bounds(o.x,o.y,r,u)},_verifyPosition:function(n,t,i){var u=0,f=0,r=this._getWindowBounds(),e;return n.x+t>r.x+r.width||n.x<r.x?(u=n.altX,n.altX<r.x?n.x>n.altX&&(u=n.x):r.width+r.x-n.altX<t&&(e=n.x>n.altX?Math.abs(r.x-n.x):r.x-n.x,e<t-r.width-r.x+n.altX&&(u=n.x))):u=n.x,n.y+i>r.y+r.height||n.y<r.y?(f=n.altY,n.altY<r.y?r.y-n.altY>i-r.height-r.y+n.y&&(f=n.y):r.height+r.y-n.altY<i&&r.y-n.y<i-r.height-r.y+n.altY&&(f=n.y)):f=n.y,{x:u,y:f}},_getWindowBounds:function(){return{x:this._getWindowScrollLeft(),y:this._getWindowScrollTop(),width:this._getWindowWidth(),height:this._getWindowHeight()}},_getWindowHeight:function(){var n=0;return document.documentElement&&document.documentElement.clientHeight?n=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(n=document.body.clientHeight),n},_getWindowWidth:function(){var n=0;return document.documentElement&&document.documentElement.clientWidth?n=document.documentElement.clientWidth:document.body&&document.body.clientWidth&&(n=document.body.clientWidth),n},_getWindowScrollTop:function(){var n=0;return typeof pageYOffset=="number"&&(n=window.pageYOffset),document.body&&document.body.scrollTop?n=document.body.scrollTop:document.documentElement&&document.documentElement.scrollTop&&(n=document.documentElement.scrollTop),n},_getWindowScrollLeft:function(){var n=0;return typeof pageXOffset=="number"?n=window.pageXOffset:document.body&&document.body.scrollLeft?n=document.body.scrollLeft:document.documentElement&&document.documentElement.scrollLeft&&(n=document.documentElement.scrollLeft),n},adjustPopupPosition:function(n){var r=this.get_element(),t,i;n||(n=this.getBounds());t=$common.getBounds(r);i=!1;t.x<0&&(n.x-=t.x,i=!0);t.y<0&&(n.y-=t.y,i=!0);i&&$common.setLocation(r,n)},addBackgroundIFrame:function(){var t=this.get_element(),n;Sys.Browser.agent===Sys.Browser.InternetExplorer&&Sys.Browser.version<7&&(n=t._hideWindowedElementsIFrame,n||(n=document.createElement("iframe"),n.src="javascript:'<html><\/html>';",n.style.position="absolute",n.style.display="none",n.scrolling="no",n.frameBorder="0",n.tabIndex="-1",n.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)",t.parentNode.insertBefore(n,t),t._hideWindowedElementsIFrame=n,this._moveHandler=Function.createDelegate(this,this._onMove),Sys.UI.DomEvent.addHandler(t,"move",this._moveHandler)),$common.setBounds(n,$common.getBounds(t)),n.style.left=t.style.left,n.style.top=t.style.top,n.style.display=t.style.display,t.currentStyle&&t.currentStyle.zIndex?n.style.zIndex=t.currentStyle.zIndex:t.style.zIndex&&(n.style.zIndex=t.style.zIndex))},setupPopup:function(){var n=this.get_element(),t=this.getBounds();$common.setLocation(n,t);this.adjustPopupPosition(t);n.style.zIndex=Sys.Extended.UI.zIndex.Popup;this.addBackgroundIFrame()},_hidePopup:function(){var n=this.get_element();$common.setVisible(n,!1);n.originalWidth&&(n.style.width=n.originalWidth+"px",n.originalWidth=null)},_hideCleanup:function(){var t=this.get_element(),n;this._moveHandler&&(Sys.UI.DomEvent.removeHandler(t,"move",this._moveHandler),this._moveHandler=null);Sys.Browser.agent===Sys.Browser.InternetExplorer&&(n=t._hideWindowedElementsIFrame,n&&(n.style.display="none"));this.raise_hidden(Sys.EventArgs.Empty)},_onMove:function(){var n=this.get_element();n._hideWindowedElementsIFrame&&(n.parentNode.insertBefore(n._hideWindowedElementsIFrame,n),n._hideWindowedElementsIFrame.style.top=n.style.top,n._hideWindowedElementsIFrame.style.left=n.style.left)},get_onShow:function(){return this._onShow?this._onShow.get_json():null},set_onShow:function(n){this._onShow||(this._onShow=new Sys.Extended.UI.Animation.GenericAnimationBehavior(this.get_element()),this._onShow.initialize());this._onShow.set_json(n);var t=this._onShow.get_animation();t&&t.add_ended(this._onShowEndedHandler);this.raisePropertyChanged("onShow")},get_onShowBehavior:function(){return this._onShow},onShow:function(){this._onShow&&(this._onHide&&this._onHide.quit(),this._onShow.play())},_onShowEnded:function(){this.adjustPopupPosition();this.addBackgroundIFrame();this.raise_shown(Sys.EventArgs.Empty)},get_onHide:function(){return this._onHide?this._onHide.get_json():null},set_onHide:function(n){this._onHide||(this._onHide=new Sys.Extended.UI.Animation.GenericAnimationBehavior(this.get_element()),this._onHide.initialize());this._onHide.set_json(n);var t=this._onHide.get_animation();t&&t.add_ended(this._onHideEndedHandler);this.raisePropertyChanged("onHide")},get_onHideBehavior:function(){return this._onHide},onHide:function(){this._onHide&&(this._onShow&&this._onShow.quit(),this._onHide.play())},_onHideEnded:function(){this._hideCleanup()},get_parentElement:function(){return!this._parentElement&&this._parentElementID&&this.set_parentElement($get(this._parentElementID)),this._parentElement},set_parentElement:function(n){this._parentElement=n;this.raisePropertyChanged("parentElement")},get_parentElementID:function(){return this._parentElement?this._parentElement.id:this._parentElementID},set_parentElementID:function(n){this._parentElementID=n;this.get_isInitialized()&&this.set_parentElement($get(n))},get_positioningMode:function(){return this._positioningMode},set_positioningMode:function(n){this._positioningMode=n;this.raisePropertyChanged("positioningMode")},get_x:function(){return this._x},set_x:function(n){n!=this._x&&(this._x=n,this._visible&&this.setupPopup(),this.raisePropertyChanged("x"))},get_y:function(){return this._y},set_y:function(n){n!=this._y&&(this._y=n,this._visible&&this.setupPopup(),this.raisePropertyChanged("y"))},get_visible:function(){return this._visible},add_showing:function(n){this.get_events().addHandler("showing",n)},remove_showing:function(n){this.get_events().removeHandler("showing",n)},raise_showing:function(n){var t=this.get_events().getHandler("showing");t&&t(this,n)},raiseShowing:function(n){Sys.Extended.Deprecated("raiseShowing(eventArgs)","raise_showing(eventArgs)");this.raise_showing(n)},add_shown:function(n){this.get_events().addHandler("shown",n)},remove_shown:function(n){this.get_events().removeHandler("shown",n)},raise_shown:function(n){var t=this.get_events().getHandler("shown");t&&t(this,n)},raiseShown:function(n){Sys.Extended.Deprecated("raiseShown(eventArgs)","raise_shown(eventArgs)");this.raise_shown(n)},add_hiding:function(n){this.get_events().addHandler("hiding",n)},remove_hiding:function(n){this.get_events().removeHandler("hiding",n)},raise_hiding:function(n){var t=this.get_events().getHandler("hiding");t&&t(this,n)},raiseHiding:function(n){Sys.Extended.Deprecated("raiseHiding(eventArgs)","raise_hiding(eventArgs)");this.raise_hiding(n)},add_hidden:function(n){this.get_events().addHandler("hidden",n)},remove_hidden:function(n){this.get_events().removeHandler("hidden",n)},raise_hidden:function(n){var t=this.get_events().getHandler("hidden");t&&t(this,n)},raiseHidden:function(n){Sys.Extended.Deprecated("raiseHidden(eventArgs)","raise_hidden(eventArgs)");this.raise_hidden(n)},get_unselectable:function(){return this._unselectable},set_unselectable:function(n){this._unselectable=n;this.raisePropertyChanged("unselectable")}};Sys.Extended.UI.PopupBehavior.registerClass("Sys.Extended.UI.PopupBehavior",Sys.Extended.UI.BehaviorBase);Sys.Extended.UI.PositioningMode=function(){throw Error.invalidOperation();};Sys.Extended.UI.PositioningMode.prototype={Absolute:0,Center:1,BottomLeft:2,BottomRight:3,TopLeft:4,TopRight:5,Right:6,Left:7};Sys.Extended.UI.PositioningMode.registerEnum("Sys.Extended.UI.PositioningMode");