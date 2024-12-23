let rootOwnerColor = "#fc881c";
let rootModeratorColor = "#1d56f3";
let rootMemberColor = "#00c41a";
let rootGeneralColor = "#d400ff";

let msgBoxShadowColor = "#a3a3a3";
let msgBoxShadow = ` `;

let channelFontFamily = "Open Sans";
let messageFontFamily = "Montserrat";

let fontSizeMessage = "12";
let fontSizeChannel = "16";

const updateCodeCss = () => {
    let codeCss = `
@import url('https://fonts.googleapis.com/css2?family=${channelFontFamily}');
@import url('https://fonts.googleapis.com/css2?family=${messageFontFamily}');

:root {
    --owner-color: ${rootOwnerColor};
    --moderator-color: ${rootModeratorColor};
    --member-color: ${rootMemberColor};
    --general-color: ${rootGeneralColor};
}

/* Background colors*/
/* body {
    overflow: hidden;
    background-color: rgba(181,79,79,0);
} */


/* Transparent background. */
yt-live-chat-renderer {
    background-color: transparent !important;
}
yt-live-chat-text-message-renderer,
yt-live-chat-text-message-renderer[is-highlighted] {
    background-color: transparent !important;
}

yt-live-chat-text-message-renderer[author-type="owner"],
yt-live-chat-text-message-renderer[author-type="owner"][is-highlighted] {
    background-color: transparent !important;
}

yt-live-chat-text-message-renderer[author-type="moderator"],
yt-live-chat-text-message-renderer[author-type="moderator"][is-highlighted] {
    background-color: transparent !important;
}

yt-live-chat-text-message-renderer[author-type="member"],
yt-live-chat-text-message-renderer[author-type="member"][is-highlighted] {
    background-color: transparent !important;
}

yt-live-chat-author-chip #author-name {
    background-color: transparent !important;
}
/* Outlines */
yt-live-chat-renderer * {
    font-family: "Montserrat";
    font-size: 18px !important;
    line-height: normalpx !important;
}

yt-live-chat-text-message-renderer #content,
yt-live-chat-legacy-paid-message-renderer #content {
    overflow: initial !important;
}

/* Hide scrollbar. */
yt-live-chat-item-list-renderer #items {
    overflow: hidden !important;
}

yt-live-chat-item-list-renderer #item-scroller {
    overflow: hidden !important;
}

/* Hide header and input. */
yt-live-chat-header-renderer,
yt-live-chat-message-input-renderer {
    display: none !important;
}

/* Reduce side padding. */
yt-live-chat-text-message-renderer,
yt-live-chat-legacy-paid-message-renderer {
    padding-left: 4px !important;
    padding-right: 4px !important;
    margin: 4px 1px !important;
}

yt-live-chat-paid-message-renderer #header {
    padding-left: 4px !important;
    padding-right: 4px !important;
}

/* Avatars. */
yt-live-chat-text-message-renderer #author-photo,
yt-live-chat-paid-message-renderer #author-photo,
yt-live-chat-legacy-paid-message-renderer #author-photo {
    /* display: none !important; */
    width: 32px !important;
    height: 32px !important;
    border-radius: 24px !important;
    margin-right: 6px !important;
}

yt-live-chat-text-message-renderer #author-photo img.yt-img-shadow {
    width: 32px !important;
    height: 32px !important;
}

/* Hide badges. */
yt-live-chat-text-message-renderer #author-badges {
    display: none !important;
    vertical-align: text-top !important;
}

/* Timestamps. */
yt-live-chat-text-message-renderer #timestamp {
    /* display: block !important; */
    color: #999999 !important;
    font-family: "Montserrat";
    font-size: 16px !important;
    line-height: 16px !important;
}

/* Badges. */
yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="member"],
yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="moderator"],
yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="owner"] {
    display: none;
}

/* Channel names. */
yt-live-chat-text-message-renderer #author-name {
    color: white !important;
    font-weight: 400;
    font-family: "Open Sans";
    font-size: ${fontSizeChannel}px !important;
    line-height: 20px !important;
    background-color: #a3a3a3 !important;
    padding: 4px 18px !important;
    border-radius: 16px 16px 16px 0px !important;
    border: 2px solid black;
}

yt-live-chat-text-message-renderer #author-name[type="owner"],
yt-live-chat-text-message-renderer #author-name.owner {
    color: black !important;
    /* color: var(--owner-color) !important; */
    background-color: var(--owner-color)!important;
}

yt-live-chat-text-message-renderer #author-name[type="moderator"],
yt-live-chat-text-message-renderer #author-name.moderator {
    color: white !important;
    /* color: var(--owner-color) !important; */
    background-color: var(--moderator-color) !important;
}

yt-live-chat-text-message-renderer #author-name[type="member"],
yt-live-chat-text-message-renderer #author-name.member {
    color: black !important;
    /* color: var(--owner-color) !important; */
    background-color: var(--member-color) !important;
}

/* yt-live-chat-text-message-renderer #author-name::after {
    content: ":";
    margin-left: 2px;
} */

/* Messages. */
yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer #message * {
    color: #000000 !important;
    font-family: "Montserrat";
    font-size: ${fontSizeMessage}px !important;
    line-height: normalpx !important;
    letter-spacing: normalpx !important;
    background-color: #fff;
    display: block;
    margin-top: 2px;
    padding: 6px 16px;
    border-radius: 0px 20px 20px 20px;
    border: 2px solid black;
    ${msgBoxShadow}
}

#message.yt-live-chat-text-message-renderer {
    box-shadow: 2px 3px 0px 0px  #a3a3a3;
}

#message.yt-live-chat-text-message-renderer a.yt-live-chat-text-message-renderer {
    border: none !important;
    color: white !important;
    padding: 0;
    text-decoration: underline !important;
    box-shadow: none;
}

#message.yt-live-chat-text-message-renderer .emoji.yt-live-chat-text-message-renderer {
    display: inline;
    padding: 0;
    border: none !important;
    box-shadow: none;
}

/* Isi Pesan member biasa */

yt-live-chat-text-message-renderer #message {
    /* border: 2px solid var(--general-color) !important; */
    font-family: "Montserrat";
    background-color: #fff !important;
    color: #000 !important;
}

/* Isi Pesan Owner */

yt-live-chat-text-message-renderer[author-type="owner"] #message {
    font-family: "Montserrat";
    background-color: white !important;
    color: black !important;
    box-shadow: 2px 3px 0px 0px var(--owner-color);

}

/* Isi Pesan Moderator */

yt-live-chat-text-message-renderer[author-type="moderator"] #message {
    font-family: "Montserrat";
    background-color: white !important;
    color: black !important;
    box-shadow: 2px 3px 0px 0px var(--moderator-color);
}

/* Isi Pesan Membership */

yt-live-chat-text-message-renderer[author-type="member"] #message {
    font-family: "Montserrat";
    background-color: white !important;
    color: black !important;
    box-shadow: 2px 3px 0px 0px var(--member-color);
}

/* SuperChat/Fan Funding Messages. */
yt-live-chat-paid-message-renderer #author-name,
yt-live-chat-paid-message-renderer #author-name *,
yt-live-chat-legacy-paid-message-renderer #event-text,
yt-live-chat-legacy-paid-message-renderer #event-text * {
    color: #ffffff !important;
    font-family: "Open Sans";
    font-size: 20px !important;
    line-height: 20px !important;
}

yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #purchase-amount *,
yt-live-chat-legacy-paid-message-renderer #detail-text,
yt-live-chat-legacy-paid-message-renderer #detail-text * {
    color: #ffffff !important;
    font-family: "Montserrat";
    font-size: 18px !important;
    line-height: 18px !important;
}

yt-live-chat-paid-message-renderer #content,
yt-live-chat-paid-message-renderer #content * {
    color: #ffffff !important;
    font-family: "Montserrat";
    font-size: 18px !important;
    line-height: 18px !important;
}

yt-live-chat-moderation-message-renderer {
    display: none !important;
}

yt-live-chat-paid-message-renderer {
    margin: 4px 0 !important;
}

yt-live-chat-legacy-paid-message-renderer {
    background-color: #0f9d58 !important;
    margin: 4px 0 !important;
}

yt-live-chat-text-message-renderer a,
yt-live-chat-legacy-paid-message-renderer a {
    text-decoration: none !important;
}

yt-live-chat-text-message-renderer[is-deleted],
yt-live-chat-legacy-paid-message-renderer[is-deleted] {
    display: none !important;
}

yt-live-chat-ticker-renderer {
    background-color: transparent !important;
    box-shadow: none !important;
}
yt-live-chat-ticker-renderer {
    display: none !important;
}

yt-live-chat-ticker-paid-message-item-renderer,
yt-live-chat-ticker-paid-message-item-renderer *,
yt-live-chat-ticker-sponsor-item-renderer,
yt-live-chat-ticker-sponsor-item-renderer * {
    color: #ffffff !important;
    font-family: "Montserrat";
}

yt-live-chat-mode-change-message-renderer,
yt-live-chat-viewer-engagement-message-renderer,
yt-live-chat-restricted-participation-renderer {
    display: none !important;
}

yt-live-chat-banner-manager {
    display: none !important;
}
/* @keyframes anim {
    0% {
        opacity: 0;
        transform: translateX(-16px);
    }
    100% {
        opacity: 1;
        transform: none;
    }
}

yt-live-chat-text-message-renderer,
yt-live-chat-legacy-paid-message-renderer {
    animation: anim 200ms;
    animation-fill-mode: both;
} */

yt-live-chat-action-panel-renderer,
yt-live-chat-renderer #action-panel {
    display: none !important;
}
yt-reaction-control-panel-view-model {
    display: none !important;
}
yt-live-chat-viewer-engagement-message-renderer {
    display: none !important;
}
`;

    $("#cssPreview").val(codeCss);
};

$(document).ready(function () {
    console.log("document ready");
    $("#msgOwnerColor").val("#fc881c");
    $("#msgModeratorColor").val("#1d56f3");
    $("#msgMemberColor").val("#00c41a");
    fetch("webfonts.json")
        .then((response) => response.json())
        .then((data) => {
            const fonts = data.items.map((item, iteration) => {
                return { id: iteration, text: item.family, selected: (item.family=="Open Sans") ? true : false };
            });

            $(".select-font-chat").select2({
                data: fonts
            });
        })
        .catch((error) => {
            console.log("Terjadi kesalahan: ", error);
        });
    updateCodeCss();
    console.log("inisiasi code complete");
});

$("#btnCopy").on("click", () => {
    navigator.clipboard.writeText($("#cssPreview").val());
    alert("copied");
});

$("#msgOwnerColor").on("input", function () {
    rootOwnerColor = $(this).val();
    $(":root").css("--owner-color", $(this).val());
    updateCodeCss();
});
$("#msgModeratorColor").on("input", function () {
    rootModeratorColor = $(this).val();
    $(":root").css("--moderator-color", $(this).val());
    updateCodeCss();
});
$("#msgMemberColor").on("input", function () {
    rootMemberColor = $(this).val();
    $(":root").css("--member-color", $(this).val());
    updateCodeCss();
});

$("#cbMsgBoxShadow").click(function () {
    if (this.checked) {
        msgBoxShadow = `box-shadow: 2px 3px 0px 0px ${msgBoxShadowColor};`;
        $("yt-live-chat-text-message-renderer #message").css(
            "box-shadow",
            "2px 3px 0px 0px  white"
        );
    } else {
        msgBoxShadow = " ";
        $("yt-live-chat-text-message-renderer #message").css("box-shadow", "");
    }
    updateCodeCss();
});

$("#fontChatMessage").on("change", function(){
    messageFontFamily = $("#fontChatMessage option:selected").text();
    let linkfont = `https://fonts.googleapis.com/css?family=${messageFontFamily}&display=swap`;
    $("link").eq(2).attr("href", linkfont);
    $("yt-live-chat-text-message-renderer #message").css("font-family", messageFontFamily);
    updateCodeCss();
});

$("#fontChatChannel").on("change", function(){
    channelFontFamily = $("#fontChatChannel option:selected").text();
    let linkfont = `https://fonts.googleapis.com/css?family=${channelFontFamily}&display=swap`;
    $("link").eq(3).attr("href", linkfont);
    $("yt-live-chat-text-message-renderer #author-name").css("font-family", channelFontFamily);
    updateCodeCss();
});

$("#fontSizeMessage").on("input", function() {
    fontSizeMessage = $(this).val();
    $("#fontSizeMessageDesc").html(`${fontSizeMessage}px`);
    $("yt-live-chat-text-message-renderer #message").attr("style", `font-size: ${fontSizeMessage}px !important;`);
    updateCodeCss();
})

$("#fontSizeChannel").on("input", function() {
    fontSizeChannel = $(this).val();
    $("#fontSizeChannelDesc").html(`${fontSizeChannel}px`);
    $("yt-live-chat-text-message-renderer #author-name").attr("style", `font-size: ${fontSizeChannel}px !important;`);
    updateCodeCss();
})