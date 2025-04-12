# Tree-sitter Valve CFG Grammar

Tree-sitter grammar for `.cfg` configuration files used in Valve games.

<img width="813" alt="highlights" src="https://github.com/user-attachments/assets/9d956b29-b9f3-4a21-b1d3-cef1dac4e2f1" />

## Installation

### Neovim (with nvim-treesitter)

1. Add this parser to your `nvim-treesitter` configuration ([documentation](https://github.com/nvim-treesitter/nvim-treesitter?tab=readme-ov-file#adding-parsers)):
```lua
local parser_config = require("nvim-treesitter.parsers").get_parser_configs()

-- Valve CFG
parser_config.valvecfg = {
  install_info = {
    url = "https://github.com/keyCat/tree-sitter-valvecfg",
    files = { "src/parser.c" },
    generate_requires_npm = false,
    requires_generate_from_grammar = false,
  }
}
```

2. Then, install it in Neovim:
```vim
:TSInstall valvecfg
```

3. Add filetype detection for `valvecfg`

Using Lua (preferable):
```lua
vim.filetype.add({
  extension = {
    -- Source (Valve) CFG
    cfg = "valvecfg",
  },
})
```

Using autocommand with [ftdetect](https://neovim.io/doc/user/filetype.html#ftdetect):
```vim
au BufRead,BufNewFile *.cfg set filetype=valvecfg
```

4. Download and copy files from [quries/valvecfg](https://github.com/keyCat/tree-sitter-valvecfg/tree/main/queries/valvecfg) folder into `runtimepath/queries/valvecfg` folder. Refer to [Adding queries](https://github.com/nvim-treesitter/nvim-treesitter?tab=readme-ov-file#adding-queries) section of nvim-treesitter documentation for detailed information.

### tree-sitter-cli

To use this grammar with the Tree-sitter CLI:

1. Clone the repository:
```bash
git clone https://github.com/keyCat/tree-sitter-valvecfg
cd tree-sitter-valvecfg
```

2. Generate the parser:
```bash
tree-sitter generate
```

3. Test file parsing and highlighting:
```bash
tree-sitter parse /path/to/your/file.cfg
tree-sitter highlight /path/to/your/file.cfg
```
