package tree_sitter_valvecfg_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_valvecfg "github.com/keycat/tree-sitter-valvecfg/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_valvecfg.Language())
	if language == nil {
		t.Errorf("Error loading Valve CFG grammar")
	}
}
