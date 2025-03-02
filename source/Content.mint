component Content {
    fun toString(value : Maybe(String)) : String {
        let result = Maybe.withDefault(value, "")
        result
    }

    // Renders the component.
    fun render : Html {
        // Json @inline to variable
        let config = [
            [ "Reddit"     , @asset(/assets/icons/reddit.svg)     , "https://reddit.com/"      ],
            [ "Spotify"    , @asset(/assets/icons/spotify.svg)    , "https://spotify.com/"     ],
            [ "GitHub"     , @asset(/assets/icons/github.svg)     , "https://github.com/"      ],
            [ "Jellyfin"   , @asset(/assets/icons/jellyfin.svg)   , "https://jelly.j4nis05.ch" ],
            [ "Nextcloud"  , @asset(/assets/icons/nextcloud.svg)  , "https://nas.j4nis05.ch"   ],
            [ "YouTube"    , @asset(/assets/icons/youtube.svg)    , "https://youtube.com/"     ],
            [ "Gitea"      , @asset(/assets/icons/gitea.svg)      , "https://git.j4nis05.ch"   ],
            [ "ChatGPT"    , @asset(/assets/icons/openai.svg)     , "https://chat.openai.com"  ],
            [ "Vaultwarden", @asset(/assets/icons/vaultwarden.svg), "https://vault.j4nis05.ch" ]
        ]

        <div id="icons">
            <ul>
                for item of config {
                    let name  = toString(item[0])
                    let image = toString(item[1])
                    let link  = toString(item[2])

                    <li> <a href="#{link}"> <img src="#{image}" alt="#{name} Logo" /> <p>name</p> </a> </li>
                }
            </ul>
        </div>
    }
}
