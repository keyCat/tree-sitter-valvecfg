; Set comment string for vim
((source_file) @_file
  (#set! @_file bo.commentstring "// %s"))

(comment) @comment

; Statements
(cmd
  (identifier) @function.call)
(cvar
  (identifier) @function.call)

; Value Types
(value
  type: (integer) @number)
(value
  type: (float) @number.float)
(value
  type: (identifier) @string.special)
(value
  type: (string_literal) @string)
(value
  type: (string_literal
          string_type: (integer) @number))
(value
  type: (string_literal
          string_type: (float) @number.float))

