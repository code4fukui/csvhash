# csvhash

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A command-line tool and web utility to hash specified columns in a CSV file using SHA256.

**Demo:** [**https://github.com/code4fukui/csvhash](https://code4fukui.github.io/csvhash/)

## Features

- Hashes specific CSV columns with the SHA256 algorithm.
- Adds an optional salt for enhanced security against rainbow table attacks.
- **Web UI:**
    - Easy-to-use drag-and-drop interface.
    - Processes multiple CSV files at once (downloads as a `.zip` archive).
    - Includes a "Generate Secret" button for creating a random salt.
- **CLI:**
    - Runs directly from a URL using the Deno runtime—no local installation of the script is needed.
    - Outputs processed CSV data directly to the console.

## Usage

### Web UI (Recommended)

The easiest way to use csvhash is via the web interface.

1.  Open the [demo page](https://code4fukui.github.io/csvhash/).
2.  Enter the column name you want to hash (e.g., `mail`).
3.  (Optional) Enter a secret salt, or click "Generate Secret" to create one.
4.  Drag and drop one or more `.csv` files onto the page.

The processed file(s) will be downloaded to your browser automatically.

### Command-Line Interface

#### Requirements

- [Deno](https://deno.land/) runtime

#### Command

Run the script directly from its URL. The resulting CSV is printed to standard output, which you can redirect to a file.

```sh
deno run -A https://code4fukui.github.io/csvhash/csvhash.js [filename] [colname] ([salt])
```

-   `[filename]`: The path to the input CSV file.
-   `[colname]`: The name of the column to hash.
-   `[salt]` (optional): A secret string to use as a salt.

**Example:**

```sh
# Hash the 'mail' column in data.csv with a salt and save to a new file
deno run -A https://code4fukui.github.io/csvhash/csvhash.js data.csv mail "secret123" > hashed_data.csv
```

## Development

To run the test suite, execute the following command:

```sh
deno test -A
```

## Dependencies & Attribution

This tool relies on the following open-source projects:
- [SHA256](https://github.com/code4fukui/SHA256)
- [Base16](https://github.com/code4fukui/Base16)
- [CSV, SJIS](https://github.com/code4sabae/js)

App by [Code for FUKUI](https://fukuno.jig.jp/3672).

## License

MIT License — see [LICENSE](LICENSE).