/**
 * @file Tree sitter configuration for *.cfg files in Valve games.
 * @author Ilya G.
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "valvecfg",

  extras: $ => [
    $.comment,
    /\s/,
  ],

  rules: {
    source_file: $ => repeat(seq(
      choice(
        $.comment,
        $.statement,
      ),
      /\r|\r\n|\n/
    )),

    comment: $ => token(seq('//', /[^\r\n]*/)),

    identifier: $ => {
      return token(/[a-zA-Z_+-][0-9a-zA-Z_]*/);
    },

    statement: $ => choice(
      $.cmd,
      $.cvar,
    ),

    cmd: $ => seq($.identifier, repeat($.value)),

    cvar: $ => seq($.identifier, prec(1, $.value)),

    value: $ => choice(
      field("type", $.integer),
      field("type", $.float),
      field("type", $.identifier),
      field("type", $.string_literal),
    ),

    integer: $ => token(/-?\d+/),

    float: $ => token(/-?\d*\.\d+/),

    string_literal: $ => choice(
      seq('"', field("string_type", $.integer), '"'),
      seq('"', field("string_type", $.float), '"'),
      seq('"', /[^"]*/, '"'),
      seq("'", /[^']*/, "'"),
    ),
  }
});
