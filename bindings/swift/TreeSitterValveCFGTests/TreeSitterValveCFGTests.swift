import XCTest
import SwiftTreeSitter
import TreeSitterValvecfg

final class TreeSitterValvecfgTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_valvecfg())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Valve CFG grammar")
    }
}
