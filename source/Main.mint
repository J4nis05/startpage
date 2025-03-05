component Main {
    style root {
        min-height: 100vh;
        min-width: 100vw;
        margin: 0; 
        border: 0; 
        padding: 0;
        box-sizing: border-box;

        background-image: url("/__mint__/wallpapers/#{Wallpaper.select()}");
        background-size: cover; 
        background-repeat: no-repeat; 
        background-position-x: center;
        background-color: rgba(0, 0, 0, 0.3);

        font-family: 'Inter', sans-serif;
        color: #ddeeee;

        display: flex;
        justify-content: center;
        text-align: center;
    }

    style content {
        width: 820px;
        margin: auto auto;
    }

    style search {
        width: 766px;
        padding: 10px 25px;
        margin-bottom: 25px;
        border-radius: 5px;
        opacity: 90%;
        font-size: 17.5px;
        font-family: 'Inter', sans-serif;
        border: 2px solid #6237a0;
        background-color: #282c34;
        color: #f9ffff;
    }

    fun render : Html {
        <div::root>
            <div::content>
                <div>
                    <h1>"Startpage"</h1>
                    <input::search type="text" id="search" name="search" placeholder="Search with DuckDuckGo >:3"/>
                </div>

                <Content />
            </div>
        </div>
    }
}
