# csvhash

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

csvhash is a tool that allows you to hash specified columns of a CSV file using SHA256 encryption.

## Features
- Hashes the specified column in a CSV file using SHA256 encryption
- Supports multiple CSV files
- Allows you to specify a salt for the hashing process

## Requirements
- [Deno](https://deno.land/) - a modern, secure, and fast JavaScript and TypeScript runtime

## Usage

To use the tool, follow these steps:

1. Install Deno.
2. Run the following command:

   ```sh
   deno run -A https://code4fukui.github.io/csvhash/csvhash.js [filename] [colname] ([salt])
   ```

   - `[filename]`: The path to the CSV file.
   - `[colname]`: The name of the column to be hashed.
   - `[salt]` (optional): A secret string to be used as a salt for the hashing process.

3. The hashed CSV data will be output to the console.

## Test

To run the test suite:

```sh
deno test -A
```

## Dependencies
- [SHA256](https://github.com/code4fukui/SHA256)
- [Base16](https://github.com/code4fukui/Base16)
- [CSV, SJIS](https://github.com/code4sabae/js)

## License
MIT License — see [LICENSE](LICENSE).