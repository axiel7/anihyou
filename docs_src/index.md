# Custom Links

The _Custom Links_ feature allows you to enter a website address or an [Android Intent](https://developer.chrome.com/docs/android/intents) to quickly search for an anime/manga inside that website or app. It's very similar to the _Quicklinks_ feature of [MALSync](https://malsync.moe).


## Usage

You can manage _Custom Links_ by going to **Profile** -> **Settings** -> **Custom links**.

After you add a _Custom Link_ a 🔗 button will appear in anime or manga details page.

### Configuration

When adding a _Custom Link_ you can configure these options:

- `Link name`: the display name to show so you can identify it when choosing _Custom Links_ to open.

- `URL`: the url of the website or [Android Intent URI](https://developer.chrome.com/docs/android/intents). The url must contain the `{name}` text because the app will replace that text with the anime/manga title.

- `Space separator`: the character to uses as an space separator for the anime/manga title search query.
> Different websites uses different separators, try to search something on the desired website and taking a look at the full URL in the address bar to see which one uses.
> For Android Intents you should use the empty ` `  separator most of the time.

- `Title language`: the language to use by default for the anime/manga title.
> You can leave it empty and the app will ask you everytime which language you want to use.

## Examples

Here are some _Custom Links_ examples so you can copy paste them 😉.

#### Nyaa

Separator: `+`

Anime
```
https://nyaa(dot)si/?f=0&c=1_0&q={name}
```

Manga
```
https://nyaa(dot)si/?f=0&c=3_0&q={name}
```

#### MangaDex

Separator: `+`

```
https://mangadex.org/search?q={name}
```

#### Mihon

Separator: ` `

```
intent:#Intent;action=eu.kanade.tachiyomi.SEARCH;S.query={name};end
```