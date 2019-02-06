function HideEditLinks() {
	$(".modulelinks").hide();
	$(".ModuleEditLink").hide();
}

function ShowEditLinks() {
	$(".modulelinks").show();
	$(".ModuleEditLink").show();
}

$(document).ready(function() {
	var editLinksState = Get_Cookie('editLinksState');
	if (editLinksState != null) {
		if (editLinksState == 'hidden') {
			HideEditLinks();
		}
		if (editLinksState == 'visible') {
			ShowEditLinks();
		}
	}

	$("a#togglemodulelinks").click(function() {
		editLinksState = Get_Cookie('editLinksState');
		if (editLinksState == null || editLinksState == 'visible') {
			HideEditLinks();
			Set_Cookie('editLinksState', 'hidden')
		} else if (editLinksState == 'hidden') {
			ShowEditLinks();
			Set_Cookie('editLinksState', 'visible')
		}
	});
});