// Generated from ../lib/grammar/asm8085.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var asm8085Listener = require('./asm8085Listener').asm8085Listener;
var grammarFileName = "asm8085.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003j\u0123\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0003\u0002\u0005\u0002,\n\u0002\u0003\u0002",
    "\u0006\u0002/\n\u0002\r\u0002\u000e\u00020\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u00036\n\u0003\u0003\u0004\u0005\u00049\n\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004=\n\u0004\u0003\u0004\u0005\u0004@\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007\u00d2\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00e0\n\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00ed\n\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00f8\n\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u0107\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u010e\n\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u0117\n\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0002\u0002\u0016\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(\u0002\u0002\u0175\u0002.\u0003",
    "\u0002\u0002\u0002\u00045\u0003\u0002\u0002\u0002\u00068\u0003\u0002",
    "\u0002\u0002\bA\u0003\u0002\u0002\u0002\nD\u0003\u0002\u0002\u0002\f",
    "\u00d1\u0003\u0002\u0002\u0002\u000e\u00df\u0003\u0002\u0002\u0002\u0010",
    "\u00e1\u0003\u0002\u0002\u0002\u0012\u00e3\u0003\u0002\u0002\u0002\u0014",
    "\u00e5\u0003\u0002\u0002\u0002\u0016\u00ec\u0003\u0002\u0002\u0002\u0018",
    "\u00f7\u0003\u0002\u0002\u0002\u001a\u0106\u0003\u0002\u0002\u0002\u001c",
    "\u010d\u0003\u0002\u0002\u0002\u001e\u0116\u0003\u0002\u0002\u0002 ",
    "\u0118\u0003\u0002\u0002\u0002\"\u011a\u0003\u0002\u0002\u0002$\u011c",
    "\u0003\u0002\u0002\u0002&\u011e\u0003\u0002\u0002\u0002(\u0120\u0003",
    "\u0002\u0002\u0002*,\u0005\u0004\u0003\u0002+*\u0003\u0002\u0002\u0002",
    "+,\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-/\u0007g\u0002",
    "\u0002.+\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020.\u0003\u0002",
    "\u0002\u000201\u0003\u0002\u0002\u00021\u0003\u0003\u0002\u0002\u0002",
    "26\u0005\n\u0006\u000236\u0005\u0006\u0004\u000246\u0005\b\u0005\u0002",
    "52\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000254\u0003\u0002\u0002",
    "\u00026\u0005\u0003\u0002\u0002\u000279\u0005\b\u0005\u000287\u0003",
    "\u0002\u0002\u000289\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002",
    ":=\u0005\f\u0007\u0002;=\u0005\u000e\b\u0002<:\u0003\u0002\u0002\u0002",
    "<;\u0003\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002>@\u0005\n\u0006",
    "\u0002?>\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@\u0007\u0003",
    "\u0002\u0002\u0002AB\u0007h\u0002\u0002BC\u0007\u0003\u0002\u0002C\t",
    "\u0003\u0002\u0002\u0002DE\u0007i\u0002\u0002E\u000b\u0003\u0002\u0002",
    "\u0002FG\u0007\u0004\u0002\u0002G\u00d2\u0005\u0018\r\u0002HI\u0007",
    "\u0005\u0002\u0002I\u00d2\u0005\u0010\t\u0002JK\u0007\u0006\u0002\u0002",
    "K\u00d2\u0005\u0010\t\u0002LM\u0007\u0007\u0002\u0002M\u00d2\u0005\u0018",
    "\r\u0002NO\u0007\b\u0002\u0002O\u00d2\u0005\u0010\t\u0002PQ\u0007\t",
    "\u0002\u0002Q\u00d2\u0005\u0018\r\u0002RS\u0007\n\u0002\u0002S\u00d2",
    "\u0005\u0018\r\u0002TU\u0007\u000b\u0002\u0002U\u00d2\u0005\u0018\r",
    "\u0002VW\u0007\f\u0002\u0002W\u00d2\u0005\u0018\r\u0002X\u00d2\u0007",
    "\r\u0002\u0002Y\u00d2\u0007\u000e\u0002\u0002Z[\u0007\u000f\u0002\u0002",
    "[\u00d2\u0005\u0010\t\u0002\\]\u0007\u0010\u0002\u0002]\u00d2\u0005",
    "\u0018\r\u0002^_\u0007\u0011\u0002\u0002_\u00d2\u0005\u0018\r\u0002",
    "`a\u0007\u0012\u0002\u0002a\u00d2\u0005\u0018\r\u0002bc\u0007\u0013",
    "\u0002\u0002c\u00d2\u0005\u0018\r\u0002de\u0007\u0014\u0002\u0002e\u00d2",
    "\u0005\u0018\r\u0002fg\u0007\u0015\u0002\u0002g\u00d2\u0005\u0018\r",
    "\u0002hi\u0007\u0016\u0002\u0002i\u00d2\u0005\u0018\r\u0002j\u00d2\u0007",
    "\u0017\u0002\u0002kl\u0007\u0018\u0002\u0002l\u00d2\u0005\u0010\t\u0002",
    "mn\u0007\u0019\u0002\u0002n\u00d2\u0005\u0010\t\u0002op\u0007\u001a",
    "\u0002\u0002p\u00d2\u0005\u0010\t\u0002q\u00d2\u0007\u001b\u0002\u0002",
    "r\u00d2\u0007\u001c\u0002\u0002s\u00d2\u0007\u001d\u0002\u0002tu\u0007",
    "\u001e\u0002\u0002u\u00d2\u0005\u0018\r\u0002vw\u0007\u001f\u0002\u0002",
    "w\u00d2\u0005\u0010\t\u0002xy\u0007 \u0002\u0002y\u00d2\u0005\u0010",
    "\t\u0002z{\u0007!\u0002\u0002{\u00d2\u0005\u0018\r\u0002|}\u0007\"\u0002",
    "\u0002}\u00d2\u0005\u0018\r\u0002~\u007f\u0007#\u0002\u0002\u007f\u00d2",
    "\u0005\u0018\r\u0002\u0080\u0081\u0007$\u0002\u0002\u0081\u00d2\u0005",
    "\u0018\r\u0002\u0082\u0083\u0007%\u0002\u0002\u0083\u00d2\u0005\u0018",
    "\r\u0002\u0084\u0085\u0007&\u0002\u0002\u0085\u00d2\u0005\u0018\r\u0002",
    "\u0086\u0087\u0007\'\u0002\u0002\u0087\u00d2\u0005\u0018\r\u0002\u0088",
    "\u0089\u0007(\u0002\u0002\u0089\u00d2\u0005\u0018\r\u0002\u008a\u008b",
    "\u0007)\u0002\u0002\u008b\u00d2\u0005\u0018\r\u0002\u008c\u008d\u0007",
    "*\u0002\u0002\u008d\u00d2\u0005\u0018\r\u0002\u008e\u008f\u0007+\u0002",
    "\u0002\u008f\u00d2\u0005\u0010\t\u0002\u0090\u0091\u0007,\u0002\u0002",
    "\u0091\u00d2\u0005\u0018\r\u0002\u0092\u0093\u0007-\u0002\u0002\u0093",
    "\u0094\u0005\u0010\t\u0002\u0094\u0095\u0007.\u0002\u0002\u0095\u0096",
    "\u0005\u0018\r\u0002\u0096\u00d2\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0007/\u0002\u0002\u0098\u0099\u0005\u0010\t\u0002\u0099\u009a\u0007",
    ".\u0002\u0002\u009a\u009b\u0005\u0010\t\u0002\u009b\u00d2\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u00070\u0002\u0002\u009d\u009e\u0005\u0010",
    "\t\u0002\u009e\u009f\u0007.\u0002\u0002\u009f\u00a0\u0005\u0018\r\u0002",
    "\u00a0\u00d2\u0003\u0002\u0002\u0002\u00a1\u00d2\u00071\u0002\u0002",
    "\u00a2\u00a3\u00072\u0002\u0002\u00a3\u00d2\u0005\u0010\t\u0002\u00a4",
    "\u00a5\u00072\u0002\u0002\u00a5\u00d2\u0005\u0018\r\u0002\u00a6\u00a7",
    "\u00073\u0002\u0002\u00a7\u00d2\u0005\u0018\r\u0002\u00a8\u00d2\u0007",
    "4\u0002\u0002\u00a9\u00aa\u00075\u0002\u0002\u00aa\u00d2\u0005\u0010",
    "\t\u0002\u00ab\u00ac\u00076\u0002\u0002\u00ac\u00d2\u0005\u0010\t\u0002",
    "\u00ad\u00d2\u00077\u0002\u0002\u00ae\u00d2\u00078\u0002\u0002\u00af",
    "\u00d2\u00079\u0002\u0002\u00b0\u00d2\u0007:\u0002\u0002\u00b1\u00d2",
    "\u0007;\u0002\u0002\u00b2\u00d2\u0007<\u0002\u0002\u00b3\u00d2\u0007",
    "=\u0002\u0002\u00b4\u00d2\u0007>\u0002\u0002\u00b5\u00d2\u0007?\u0002",
    "\u0002\u00b6\u00d2\u0007@\u0002\u0002\u00b7\u00d2\u0007A\u0002\u0002",
    "\u00b8\u00d2\u0007B\u0002\u0002\u00b9\u00d2\u0007C\u0002\u0002\u00ba",
    "\u00d2\u0007D\u0002\u0002\u00bb\u00bc\u0007E\u0002\u0002\u00bc\u00d2",
    "\u0005\u0010\t\u0002\u00bd\u00be\u0007F\u0002\u0002\u00be\u00d2\u0005",
    "\u0018\r\u0002\u00bf\u00c0\u0007G\u0002\u0002\u00c0\u00d2\u0005\u0018",
    "\r\u0002\u00c1\u00d2\u0007H\u0002\u0002\u00c2\u00d2\u0007I\u0002\u0002",
    "\u00c3\u00c4\u0007J\u0002\u0002\u00c4\u00d2\u0005\u0018\r\u0002\u00c5",
    "\u00c6\u0007K\u0002\u0002\u00c6\u00d2\u0005\u0010\t\u0002\u00c7\u00c8",
    "\u0007L\u0002\u0002\u00c8\u00d2\u0005\u0010\t\u0002\u00c9\u00ca\u0007",
    "M\u0002\u0002\u00ca\u00d2\u0005\u0018\r\u0002\u00cb\u00d2\u0007N\u0002",
    "\u0002\u00cc\u00cd\u0007O\u0002\u0002\u00cd\u00d2\u0005\u0010\t\u0002",
    "\u00ce\u00cf\u0007P\u0002\u0002\u00cf\u00d2\u0005\u0018\r\u0002\u00d0",
    "\u00d2\u0007Q\u0002\u0002\u00d1F\u0003\u0002\u0002\u0002\u00d1H\u0003",
    "\u0002\u0002\u0002\u00d1J\u0003\u0002\u0002\u0002\u00d1L\u0003\u0002",
    "\u0002\u0002\u00d1N\u0003\u0002\u0002\u0002\u00d1P\u0003\u0002\u0002",
    "\u0002\u00d1R\u0003\u0002\u0002\u0002\u00d1T\u0003\u0002\u0002\u0002",
    "\u00d1V\u0003\u0002\u0002\u0002\u00d1X\u0003\u0002\u0002\u0002\u00d1",
    "Y\u0003\u0002\u0002\u0002\u00d1Z\u0003\u0002\u0002\u0002\u00d1\\\u0003",
    "\u0002\u0002\u0002\u00d1^\u0003\u0002\u0002\u0002\u00d1`\u0003\u0002",
    "\u0002\u0002\u00d1b\u0003\u0002\u0002\u0002\u00d1d\u0003\u0002\u0002",
    "\u0002\u00d1f\u0003\u0002\u0002\u0002\u00d1h\u0003\u0002\u0002\u0002",
    "\u00d1j\u0003\u0002\u0002\u0002\u00d1k\u0003\u0002\u0002\u0002\u00d1",
    "m\u0003\u0002\u0002\u0002\u00d1o\u0003\u0002\u0002\u0002\u00d1q\u0003",
    "\u0002\u0002\u0002\u00d1r\u0003\u0002\u0002\u0002\u00d1s\u0003\u0002",
    "\u0002\u0002\u00d1t\u0003\u0002\u0002\u0002\u00d1v\u0003\u0002\u0002",
    "\u0002\u00d1x\u0003\u0002\u0002\u0002\u00d1z\u0003\u0002\u0002\u0002",
    "\u00d1|\u0003\u0002\u0002\u0002\u00d1~\u0003\u0002\u0002\u0002\u00d1",
    "\u0080\u0003\u0002\u0002\u0002\u00d1\u0082\u0003\u0002\u0002\u0002\u00d1",
    "\u0084\u0003\u0002\u0002\u0002\u00d1\u0086\u0003\u0002\u0002\u0002\u00d1",
    "\u0088\u0003\u0002\u0002\u0002\u00d1\u008a\u0003\u0002\u0002\u0002\u00d1",
    "\u008c\u0003\u0002\u0002\u0002\u00d1\u008e\u0003\u0002\u0002\u0002\u00d1",
    "\u0090\u0003\u0002\u0002\u0002\u00d1\u0092\u0003\u0002\u0002\u0002\u00d1",
    "\u0097\u0003\u0002\u0002\u0002\u00d1\u009c\u0003\u0002\u0002\u0002\u00d1",
    "\u00a1\u0003\u0002\u0002\u0002\u00d1\u00a2\u0003\u0002\u0002\u0002\u00d1",
    "\u00a4\u0003\u0002\u0002\u0002\u00d1\u00a6\u0003\u0002\u0002\u0002\u00d1",
    "\u00a8\u0003\u0002\u0002\u0002\u00d1\u00a9\u0003\u0002\u0002\u0002\u00d1",
    "\u00ab\u0003\u0002\u0002\u0002\u00d1\u00ad\u0003\u0002\u0002\u0002\u00d1",
    "\u00ae\u0003\u0002\u0002\u0002\u00d1\u00af\u0003\u0002\u0002\u0002\u00d1",
    "\u00b0\u0003\u0002\u0002\u0002\u00d1\u00b1\u0003\u0002\u0002\u0002\u00d1",
    "\u00b2\u0003\u0002\u0002\u0002\u00d1\u00b3\u0003\u0002\u0002\u0002\u00d1",
    "\u00b4\u0003\u0002\u0002\u0002\u00d1\u00b5\u0003\u0002\u0002\u0002\u00d1",
    "\u00b6\u0003\u0002\u0002\u0002\u00d1\u00b7\u0003\u0002\u0002\u0002\u00d1",
    "\u00b8\u0003\u0002\u0002\u0002\u00d1\u00b9\u0003\u0002\u0002\u0002\u00d1",
    "\u00ba\u0003\u0002\u0002\u0002\u00d1\u00bb\u0003\u0002\u0002\u0002\u00d1",
    "\u00bd\u0003\u0002\u0002\u0002\u00d1\u00bf\u0003\u0002\u0002\u0002\u00d1",
    "\u00c1\u0003\u0002\u0002\u0002\u00d1\u00c2\u0003\u0002\u0002\u0002\u00d1",
    "\u00c3\u0003\u0002\u0002\u0002\u00d1\u00c5\u0003\u0002\u0002\u0002\u00d1",
    "\u00c7\u0003\u0002\u0002\u0002\u00d1\u00c9\u0003\u0002\u0002\u0002\u00d1",
    "\u00cb\u0003\u0002\u0002\u0002\u00d1\u00cc\u0003\u0002\u0002\u0002\u00d1",
    "\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d0\u0003\u0002\u0002\u0002\u00d2",
    "\r\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007R\u0002\u0002\u00d4\u00e0",
    "\u0005\u0016\f\u0002\u00d5\u00d6\u0007S\u0002\u0002\u00d6\u00e0\u0005",
    "\u0018\r\u0002\u00d7\u00d8\u0007T\u0002\u0002\u00d8\u00e0\u0005\u0018",
    "\r\u0002\u00d9\u00da\u0007h\u0002\u0002\u00da\u00db\u0007U\u0002\u0002",
    "\u00db\u00e0\u0005\u0018\r\u0002\u00dc\u00e0\u0007V\u0002\u0002\u00dd",
    "\u00e0\u0007W\u0002\u0002\u00de\u00e0\u0007X\u0002\u0002\u00df\u00d3",
    "\u0003\u0002\u0002\u0002\u00df\u00d5\u0003\u0002\u0002\u0002\u00df\u00d7",
    "\u0003\u0002\u0002\u0002\u00df\u00d9\u0003\u0002\u0002\u0002\u00df\u00dc",
    "\u0003\u0002\u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00df\u00de",
    "\u0003\u0002\u0002\u0002\u00e0\u000f\u0003\u0002\u0002\u0002\u00e1\u00e2",
    "\u0007a\u0002\u0002\u00e2\u0011\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\u0007h\u0002\u0002\u00e4\u0013\u0003\u0002\u0002\u0002\u00e5\u00e6",
    "\u0007Y\u0002\u0002\u00e6\u0015\u0003\u0002\u0002\u0002\u00e7\u00e8",
    "\u0005\u0018\r\u0002\u00e8\u00e9\u0007.\u0002\u0002\u00e9\u00ea\u0005",
    "\u0016\f\u0002\u00ea\u00ed\u0003\u0002\u0002\u0002\u00eb\u00ed\u0005",
    "\u0018\r\u0002\u00ec\u00e7\u0003\u0002\u0002\u0002\u00ec\u00eb\u0003",
    "\u0002\u0002\u0002\u00ed\u0017\u0003\u0002\u0002\u0002\u00ee\u00ef\u0005",
    "\u001a\u000e\u0002\u00ef\u00f0\u0007Z\u0002\u0002\u00f0\u00f1\u0005",
    "\u0018\r\u0002\u00f1\u00f8\u0003\u0002\u0002\u0002\u00f2\u00f3\u0005",
    "\u001a\u000e\u0002\u00f3\u00f4\u0007[\u0002\u0002\u00f4\u00f5\u0005",
    "\u0018\r\u0002\u00f5\u00f8\u0003\u0002\u0002\u0002\u00f6\u00f8\u0005",
    "\u001a\u000e\u0002\u00f7\u00ee\u0003\u0002\u0002\u0002\u00f7\u00f2\u0003",
    "\u0002\u0002\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f8\u0019\u0003",
    "\u0002\u0002\u0002\u00f9\u00fa\u0005\u001c\u000f\u0002\u00fa\u00fb\u0007",
    "\\\u0002\u0002\u00fb\u00fc\u0005\u0018\r\u0002\u00fc\u0107\u0003\u0002",
    "\u0002\u0002\u00fd\u00fe\u0005\u001c\u000f\u0002\u00fe\u00ff\u0007]",
    "\u0002\u0002\u00ff\u0100\u0005\u0018\r\u0002\u0100\u0107\u0003\u0002",
    "\u0002\u0002\u0101\u0102\u0005\u001c\u000f\u0002\u0102\u0103\u0007^",
    "\u0002\u0002\u0103\u0104\u0005\u0018\r\u0002\u0104\u0107\u0003\u0002",
    "\u0002\u0002\u0105\u0107\u0005\u001c\u000f\u0002\u0106\u00f9\u0003\u0002",
    "\u0002\u0002\u0106\u00fd\u0003\u0002\u0002\u0002\u0106\u0101\u0003\u0002",
    "\u0002\u0002\u0106\u0105\u0003\u0002\u0002\u0002\u0107\u001b\u0003\u0002",
    "\u0002\u0002\u0108\u0109\u0007_\u0002\u0002\u0109\u010a\u0005\u0018",
    "\r\u0002\u010a\u010b\u0007`\u0002\u0002\u010b\u010e\u0003\u0002\u0002",
    "\u0002\u010c\u010e\u0005\u001e\u0010\u0002\u010d\u0108\u0003\u0002\u0002",
    "\u0002\u010d\u010c\u0003\u0002\u0002\u0002\u010e\u001d\u0003\u0002\u0002",
    "\u0002\u010f\u0117\u0005 \u0011\u0002\u0110\u0117\u0005\"\u0012\u0002",
    "\u0111\u0117\u0005$\u0013\u0002\u0112\u0117\u0005&\u0014\u0002\u0113",
    "\u0117\u0005(\u0015\u0002\u0114\u0117\u0005\u0012\n\u0002\u0115\u0117",
    "\u0005\u0014\u000b\u0002\u0116\u010f\u0003\u0002\u0002\u0002\u0116\u0110",
    "\u0003\u0002\u0002\u0002\u0116\u0111\u0003\u0002\u0002\u0002\u0116\u0112",
    "\u0003\u0002\u0002\u0002\u0116\u0113\u0003\u0002\u0002\u0002\u0116\u0114",
    "\u0003\u0002\u0002\u0002\u0116\u0115\u0003\u0002\u0002\u0002\u0117\u001f",
    "\u0003\u0002\u0002\u0002\u0118\u0119\u0007b\u0002\u0002\u0119!\u0003",
    "\u0002\u0002\u0002\u011a\u011b\u0007c\u0002\u0002\u011b#\u0003\u0002",
    "\u0002\u0002\u011c\u011d\u0007d\u0002\u0002\u011d%\u0003\u0002\u0002",
    "\u0002\u011e\u011f\u0007e\u0002\u0002\u011f\'\u0003\u0002\u0002\u0002",
    "\u0120\u0121\u0007f\u0002\u0002\u0121)\u0003\u0002\u0002\u0002\u000f",
    "+058<?\u00d1\u00df\u00ec\u00f7\u0106\u010d\u0116"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'ACI'", "'ADC'", "'ADD'", "'ADI'", "'ANA'", 
                     "'ANI'", "'CALL'", "'CC'", "'CM'", "'CMA'", "'CMC'", 
                     "'CMP'", "'CNC'", "'CNZ'", "'CP'", "'CPE'", "'CPI'", 
                     "'CPO'", "'CZ'", "'DAA'", "'DAD'", "'DCR'", "'DCX'", 
                     "'DI'", "'EI'", "'HLT'", "'IN'", "'INR'", "'INX'", 
                     "'JC'", "'JM'", "'JMP'", "'JNC'", "'JNZ'", "'JP'", 
                     "'JPE'", "'JPO'", "'JZ'", "'LDA'", "'LDAX'", "'LHLD'", 
                     "'LXI'", "','", "'MOV'", "'MVI'", "'NOP'", "'ORA'", 
                     "'OUT'", "'PCHL'", "'POP'", "'PUSH'", "'RAL'", "'RAR'", 
                     "'RC'", "'RET'", "'RIM'", "'RLC'", "'RM'", "'RNC'", 
                     "'RNZ'", "'RP'", "'RPE'", "'RPO'", "'RRC'", "'RZ'", 
                     "'SBB'", "'SBI'", "'SHLD'", "'SIM'", "'SPHL'", "'STA'", 
                     "'STAX'", "'SUB'", "'SUI'", "'XCHG'", "'XRA'", "'XRI'", 
                     "'XTHL'", "'DB'", "'DS'", "'ORG'", "'SET'", "'ASEG'", 
                     "'CSEG'", "'DSEG'", "'$'", "'+'", "'-'", "'*'", "'/'", 
                     "'MOD'", "'('", "')'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "REGISTER", "HEX", "OCT", 
                      "BIN", "DEC", "STR", "EOL", "LABEL", "COMMENT", "WS" ];

var ruleNames =  [ "prog", "line", "operation", "label", "comment", "instruction", 
                   "directive", "register", "labeloperand", "locationcounteroperand", 
                   "expressionlist", "expression", "multexpression", "parenexpression", 
                   "immediate", "hex", "oct", "bin", "dec", "str" ];

function asm8085Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

asm8085Parser.prototype = Object.create(antlr4.Parser.prototype);
asm8085Parser.prototype.constructor = asm8085Parser;

Object.defineProperty(asm8085Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

asm8085Parser.EOF = antlr4.Token.EOF;
asm8085Parser.T__0 = 1;
asm8085Parser.T__1 = 2;
asm8085Parser.T__2 = 3;
asm8085Parser.T__3 = 4;
asm8085Parser.T__4 = 5;
asm8085Parser.T__5 = 6;
asm8085Parser.T__6 = 7;
asm8085Parser.T__7 = 8;
asm8085Parser.T__8 = 9;
asm8085Parser.T__9 = 10;
asm8085Parser.T__10 = 11;
asm8085Parser.T__11 = 12;
asm8085Parser.T__12 = 13;
asm8085Parser.T__13 = 14;
asm8085Parser.T__14 = 15;
asm8085Parser.T__15 = 16;
asm8085Parser.T__16 = 17;
asm8085Parser.T__17 = 18;
asm8085Parser.T__18 = 19;
asm8085Parser.T__19 = 20;
asm8085Parser.T__20 = 21;
asm8085Parser.T__21 = 22;
asm8085Parser.T__22 = 23;
asm8085Parser.T__23 = 24;
asm8085Parser.T__24 = 25;
asm8085Parser.T__25 = 26;
asm8085Parser.T__26 = 27;
asm8085Parser.T__27 = 28;
asm8085Parser.T__28 = 29;
asm8085Parser.T__29 = 30;
asm8085Parser.T__30 = 31;
asm8085Parser.T__31 = 32;
asm8085Parser.T__32 = 33;
asm8085Parser.T__33 = 34;
asm8085Parser.T__34 = 35;
asm8085Parser.T__35 = 36;
asm8085Parser.T__36 = 37;
asm8085Parser.T__37 = 38;
asm8085Parser.T__38 = 39;
asm8085Parser.T__39 = 40;
asm8085Parser.T__40 = 41;
asm8085Parser.T__41 = 42;
asm8085Parser.T__42 = 43;
asm8085Parser.T__43 = 44;
asm8085Parser.T__44 = 45;
asm8085Parser.T__45 = 46;
asm8085Parser.T__46 = 47;
asm8085Parser.T__47 = 48;
asm8085Parser.T__48 = 49;
asm8085Parser.T__49 = 50;
asm8085Parser.T__50 = 51;
asm8085Parser.T__51 = 52;
asm8085Parser.T__52 = 53;
asm8085Parser.T__53 = 54;
asm8085Parser.T__54 = 55;
asm8085Parser.T__55 = 56;
asm8085Parser.T__56 = 57;
asm8085Parser.T__57 = 58;
asm8085Parser.T__58 = 59;
asm8085Parser.T__59 = 60;
asm8085Parser.T__60 = 61;
asm8085Parser.T__61 = 62;
asm8085Parser.T__62 = 63;
asm8085Parser.T__63 = 64;
asm8085Parser.T__64 = 65;
asm8085Parser.T__65 = 66;
asm8085Parser.T__66 = 67;
asm8085Parser.T__67 = 68;
asm8085Parser.T__68 = 69;
asm8085Parser.T__69 = 70;
asm8085Parser.T__70 = 71;
asm8085Parser.T__71 = 72;
asm8085Parser.T__72 = 73;
asm8085Parser.T__73 = 74;
asm8085Parser.T__74 = 75;
asm8085Parser.T__75 = 76;
asm8085Parser.T__76 = 77;
asm8085Parser.T__77 = 78;
asm8085Parser.T__78 = 79;
asm8085Parser.T__79 = 80;
asm8085Parser.T__80 = 81;
asm8085Parser.T__81 = 82;
asm8085Parser.T__82 = 83;
asm8085Parser.T__83 = 84;
asm8085Parser.T__84 = 85;
asm8085Parser.T__85 = 86;
asm8085Parser.T__86 = 87;
asm8085Parser.T__87 = 88;
asm8085Parser.T__88 = 89;
asm8085Parser.T__89 = 90;
asm8085Parser.T__90 = 91;
asm8085Parser.T__91 = 92;
asm8085Parser.T__92 = 93;
asm8085Parser.T__93 = 94;
asm8085Parser.REGISTER = 95;
asm8085Parser.HEX = 96;
asm8085Parser.OCT = 97;
asm8085Parser.BIN = 98;
asm8085Parser.DEC = 99;
asm8085Parser.STR = 100;
asm8085Parser.EOL = 101;
asm8085Parser.LABEL = 102;
asm8085Parser.COMMENT = 103;
asm8085Parser.WS = 104;

asm8085Parser.RULE_prog = 0;
asm8085Parser.RULE_line = 1;
asm8085Parser.RULE_operation = 2;
asm8085Parser.RULE_label = 3;
asm8085Parser.RULE_comment = 4;
asm8085Parser.RULE_instruction = 5;
asm8085Parser.RULE_directive = 6;
asm8085Parser.RULE_register = 7;
asm8085Parser.RULE_labeloperand = 8;
asm8085Parser.RULE_locationcounteroperand = 9;
asm8085Parser.RULE_expressionlist = 10;
asm8085Parser.RULE_expression = 11;
asm8085Parser.RULE_multexpression = 12;
asm8085Parser.RULE_parenexpression = 13;
asm8085Parser.RULE_immediate = 14;
asm8085Parser.RULE_hex = 15;
asm8085Parser.RULE_oct = 16;
asm8085Parser.RULE_bin = 17;
asm8085Parser.RULE_dec = 18;
asm8085Parser.RULE_str = 19;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(asm8085Parser.EOL);
    } else {
        return this.getToken(asm8085Parser.EOL, i);
    }
};


ProgContext.prototype.line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineContext);
    } else {
        return this.getTypedRuleContext(LineContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitProg(this);
	}
};




asm8085Parser.ProgContext = ProgContext;

asm8085Parser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, asm8085Parser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 41;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8085Parser.T__1) | (1 << asm8085Parser.T__2) | (1 << asm8085Parser.T__3) | (1 << asm8085Parser.T__4) | (1 << asm8085Parser.T__5) | (1 << asm8085Parser.T__6) | (1 << asm8085Parser.T__7) | (1 << asm8085Parser.T__8) | (1 << asm8085Parser.T__9) | (1 << asm8085Parser.T__10) | (1 << asm8085Parser.T__11) | (1 << asm8085Parser.T__12) | (1 << asm8085Parser.T__13) | (1 << asm8085Parser.T__14) | (1 << asm8085Parser.T__15) | (1 << asm8085Parser.T__16) | (1 << asm8085Parser.T__17) | (1 << asm8085Parser.T__18) | (1 << asm8085Parser.T__19) | (1 << asm8085Parser.T__20) | (1 << asm8085Parser.T__21) | (1 << asm8085Parser.T__22) | (1 << asm8085Parser.T__23) | (1 << asm8085Parser.T__24) | (1 << asm8085Parser.T__25) | (1 << asm8085Parser.T__26) | (1 << asm8085Parser.T__27) | (1 << asm8085Parser.T__28) | (1 << asm8085Parser.T__29) | (1 << asm8085Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (asm8085Parser.T__31 - 32)) | (1 << (asm8085Parser.T__32 - 32)) | (1 << (asm8085Parser.T__33 - 32)) | (1 << (asm8085Parser.T__34 - 32)) | (1 << (asm8085Parser.T__35 - 32)) | (1 << (asm8085Parser.T__36 - 32)) | (1 << (asm8085Parser.T__37 - 32)) | (1 << (asm8085Parser.T__38 - 32)) | (1 << (asm8085Parser.T__39 - 32)) | (1 << (asm8085Parser.T__40 - 32)) | (1 << (asm8085Parser.T__41 - 32)) | (1 << (asm8085Parser.T__42 - 32)) | (1 << (asm8085Parser.T__44 - 32)) | (1 << (asm8085Parser.T__45 - 32)) | (1 << (asm8085Parser.T__46 - 32)) | (1 << (asm8085Parser.T__47 - 32)) | (1 << (asm8085Parser.T__48 - 32)) | (1 << (asm8085Parser.T__49 - 32)) | (1 << (asm8085Parser.T__50 - 32)) | (1 << (asm8085Parser.T__51 - 32)) | (1 << (asm8085Parser.T__52 - 32)) | (1 << (asm8085Parser.T__53 - 32)) | (1 << (asm8085Parser.T__54 - 32)) | (1 << (asm8085Parser.T__55 - 32)) | (1 << (asm8085Parser.T__56 - 32)) | (1 << (asm8085Parser.T__57 - 32)) | (1 << (asm8085Parser.T__58 - 32)) | (1 << (asm8085Parser.T__59 - 32)) | (1 << (asm8085Parser.T__60 - 32)) | (1 << (asm8085Parser.T__61 - 32)) | (1 << (asm8085Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (asm8085Parser.T__63 - 64)) | (1 << (asm8085Parser.T__64 - 64)) | (1 << (asm8085Parser.T__65 - 64)) | (1 << (asm8085Parser.T__66 - 64)) | (1 << (asm8085Parser.T__67 - 64)) | (1 << (asm8085Parser.T__68 - 64)) | (1 << (asm8085Parser.T__69 - 64)) | (1 << (asm8085Parser.T__70 - 64)) | (1 << (asm8085Parser.T__71 - 64)) | (1 << (asm8085Parser.T__72 - 64)) | (1 << (asm8085Parser.T__73 - 64)) | (1 << (asm8085Parser.T__74 - 64)) | (1 << (asm8085Parser.T__75 - 64)) | (1 << (asm8085Parser.T__76 - 64)) | (1 << (asm8085Parser.T__77 - 64)) | (1 << (asm8085Parser.T__78 - 64)) | (1 << (asm8085Parser.T__79 - 64)) | (1 << (asm8085Parser.T__80 - 64)) | (1 << (asm8085Parser.T__81 - 64)) | (1 << (asm8085Parser.T__83 - 64)) | (1 << (asm8085Parser.T__84 - 64)) | (1 << (asm8085Parser.T__85 - 64)))) !== 0) || _la===asm8085Parser.LABEL || _la===asm8085Parser.COMMENT) {
                this.state = 40;
                this.line();
            }

            this.state = 43;
            this.match(asm8085Parser.EOL);
            this.state = 46; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8085Parser.T__1) | (1 << asm8085Parser.T__2) | (1 << asm8085Parser.T__3) | (1 << asm8085Parser.T__4) | (1 << asm8085Parser.T__5) | (1 << asm8085Parser.T__6) | (1 << asm8085Parser.T__7) | (1 << asm8085Parser.T__8) | (1 << asm8085Parser.T__9) | (1 << asm8085Parser.T__10) | (1 << asm8085Parser.T__11) | (1 << asm8085Parser.T__12) | (1 << asm8085Parser.T__13) | (1 << asm8085Parser.T__14) | (1 << asm8085Parser.T__15) | (1 << asm8085Parser.T__16) | (1 << asm8085Parser.T__17) | (1 << asm8085Parser.T__18) | (1 << asm8085Parser.T__19) | (1 << asm8085Parser.T__20) | (1 << asm8085Parser.T__21) | (1 << asm8085Parser.T__22) | (1 << asm8085Parser.T__23) | (1 << asm8085Parser.T__24) | (1 << asm8085Parser.T__25) | (1 << asm8085Parser.T__26) | (1 << asm8085Parser.T__27) | (1 << asm8085Parser.T__28) | (1 << asm8085Parser.T__29) | (1 << asm8085Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (asm8085Parser.T__31 - 32)) | (1 << (asm8085Parser.T__32 - 32)) | (1 << (asm8085Parser.T__33 - 32)) | (1 << (asm8085Parser.T__34 - 32)) | (1 << (asm8085Parser.T__35 - 32)) | (1 << (asm8085Parser.T__36 - 32)) | (1 << (asm8085Parser.T__37 - 32)) | (1 << (asm8085Parser.T__38 - 32)) | (1 << (asm8085Parser.T__39 - 32)) | (1 << (asm8085Parser.T__40 - 32)) | (1 << (asm8085Parser.T__41 - 32)) | (1 << (asm8085Parser.T__42 - 32)) | (1 << (asm8085Parser.T__44 - 32)) | (1 << (asm8085Parser.T__45 - 32)) | (1 << (asm8085Parser.T__46 - 32)) | (1 << (asm8085Parser.T__47 - 32)) | (1 << (asm8085Parser.T__48 - 32)) | (1 << (asm8085Parser.T__49 - 32)) | (1 << (asm8085Parser.T__50 - 32)) | (1 << (asm8085Parser.T__51 - 32)) | (1 << (asm8085Parser.T__52 - 32)) | (1 << (asm8085Parser.T__53 - 32)) | (1 << (asm8085Parser.T__54 - 32)) | (1 << (asm8085Parser.T__55 - 32)) | (1 << (asm8085Parser.T__56 - 32)) | (1 << (asm8085Parser.T__57 - 32)) | (1 << (asm8085Parser.T__58 - 32)) | (1 << (asm8085Parser.T__59 - 32)) | (1 << (asm8085Parser.T__60 - 32)) | (1 << (asm8085Parser.T__61 - 32)) | (1 << (asm8085Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (asm8085Parser.T__63 - 64)) | (1 << (asm8085Parser.T__64 - 64)) | (1 << (asm8085Parser.T__65 - 64)) | (1 << (asm8085Parser.T__66 - 64)) | (1 << (asm8085Parser.T__67 - 64)) | (1 << (asm8085Parser.T__68 - 64)) | (1 << (asm8085Parser.T__69 - 64)) | (1 << (asm8085Parser.T__70 - 64)) | (1 << (asm8085Parser.T__71 - 64)) | (1 << (asm8085Parser.T__72 - 64)) | (1 << (asm8085Parser.T__73 - 64)) | (1 << (asm8085Parser.T__74 - 64)) | (1 << (asm8085Parser.T__75 - 64)) | (1 << (asm8085Parser.T__76 - 64)) | (1 << (asm8085Parser.T__77 - 64)) | (1 << (asm8085Parser.T__78 - 64)) | (1 << (asm8085Parser.T__79 - 64)) | (1 << (asm8085Parser.T__80 - 64)) | (1 << (asm8085Parser.T__81 - 64)) | (1 << (asm8085Parser.T__83 - 64)) | (1 << (asm8085Parser.T__84 - 64)) | (1 << (asm8085Parser.T__85 - 64)))) !== 0) || ((((_la - 101)) & ~0x1f) == 0 && ((1 << (_la - 101)) & ((1 << (asm8085Parser.EOL - 101)) | (1 << (asm8085Parser.LABEL - 101)) | (1 << (asm8085Parser.COMMENT - 101)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_line;
    return this;
}

LineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineContext.prototype.constructor = LineContext;

LineContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
};

LineContext.prototype.operation = function() {
    return this.getTypedRuleContext(OperationContext,0);
};

LineContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

LineContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterLine(this);
	}
};

LineContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitLine(this);
	}
};




asm8085Parser.LineContext = LineContext;

asm8085Parser.prototype.line = function() {

    var localctx = new LineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, asm8085Parser.RULE_line);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.comment();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 49;
            this.operation();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 50;
            this.label();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_operation;
    return this;
}

OperationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperationContext.prototype.constructor = OperationContext;

OperationContext.prototype.instruction = function() {
    return this.getTypedRuleContext(InstructionContext,0);
};

OperationContext.prototype.directive = function() {
    return this.getTypedRuleContext(DirectiveContext,0);
};

OperationContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

OperationContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
};

OperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterOperation(this);
	}
};

OperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitOperation(this);
	}
};




asm8085Parser.OperationContext = OperationContext;

asm8085Parser.prototype.operation = function() {

    var localctx = new OperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, asm8085Parser.RULE_operation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        if(la_===1) {
            this.state = 53;
            this.label();

        }
        this.state = 58;
        switch(this._input.LA(1)) {
        case asm8085Parser.T__1:
        case asm8085Parser.T__2:
        case asm8085Parser.T__3:
        case asm8085Parser.T__4:
        case asm8085Parser.T__5:
        case asm8085Parser.T__6:
        case asm8085Parser.T__7:
        case asm8085Parser.T__8:
        case asm8085Parser.T__9:
        case asm8085Parser.T__10:
        case asm8085Parser.T__11:
        case asm8085Parser.T__12:
        case asm8085Parser.T__13:
        case asm8085Parser.T__14:
        case asm8085Parser.T__15:
        case asm8085Parser.T__16:
        case asm8085Parser.T__17:
        case asm8085Parser.T__18:
        case asm8085Parser.T__19:
        case asm8085Parser.T__20:
        case asm8085Parser.T__21:
        case asm8085Parser.T__22:
        case asm8085Parser.T__23:
        case asm8085Parser.T__24:
        case asm8085Parser.T__25:
        case asm8085Parser.T__26:
        case asm8085Parser.T__27:
        case asm8085Parser.T__28:
        case asm8085Parser.T__29:
        case asm8085Parser.T__30:
        case asm8085Parser.T__31:
        case asm8085Parser.T__32:
        case asm8085Parser.T__33:
        case asm8085Parser.T__34:
        case asm8085Parser.T__35:
        case asm8085Parser.T__36:
        case asm8085Parser.T__37:
        case asm8085Parser.T__38:
        case asm8085Parser.T__39:
        case asm8085Parser.T__40:
        case asm8085Parser.T__41:
        case asm8085Parser.T__42:
        case asm8085Parser.T__44:
        case asm8085Parser.T__45:
        case asm8085Parser.T__46:
        case asm8085Parser.T__47:
        case asm8085Parser.T__48:
        case asm8085Parser.T__49:
        case asm8085Parser.T__50:
        case asm8085Parser.T__51:
        case asm8085Parser.T__52:
        case asm8085Parser.T__53:
        case asm8085Parser.T__54:
        case asm8085Parser.T__55:
        case asm8085Parser.T__56:
        case asm8085Parser.T__57:
        case asm8085Parser.T__58:
        case asm8085Parser.T__59:
        case asm8085Parser.T__60:
        case asm8085Parser.T__61:
        case asm8085Parser.T__62:
        case asm8085Parser.T__63:
        case asm8085Parser.T__64:
        case asm8085Parser.T__65:
        case asm8085Parser.T__66:
        case asm8085Parser.T__67:
        case asm8085Parser.T__68:
        case asm8085Parser.T__69:
        case asm8085Parser.T__70:
        case asm8085Parser.T__71:
        case asm8085Parser.T__72:
        case asm8085Parser.T__73:
        case asm8085Parser.T__74:
        case asm8085Parser.T__75:
        case asm8085Parser.T__76:
        case asm8085Parser.T__77:
        case asm8085Parser.T__78:
            this.state = 56;
            this.instruction();
            break;
        case asm8085Parser.T__79:
        case asm8085Parser.T__80:
        case asm8085Parser.T__81:
        case asm8085Parser.T__83:
        case asm8085Parser.T__84:
        case asm8085Parser.T__85:
        case asm8085Parser.LABEL:
            this.state = 57;
            this.directive();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 61;
        _la = this._input.LA(1);
        if(_la===asm8085Parser.COMMENT) {
            this.state = 60;
            this.comment();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.LABEL = function() {
    return this.getToken(asm8085Parser.LABEL, 0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitLabel(this);
	}
};




asm8085Parser.LabelContext = LabelContext;

asm8085Parser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, asm8085Parser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(asm8085Parser.LABEL);
        this.state = 64;
        this.match(asm8085Parser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.COMMENT = function() {
    return this.getToken(asm8085Parser.COMMENT, 0);
};

CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitComment(this);
	}
};




asm8085Parser.CommentContext = CommentContext;

asm8085Parser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, asm8085Parser.RULE_comment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(asm8085Parser.COMMENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InstructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_instruction;
    return this;
}

InstructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstructionContext.prototype.constructor = InstructionContext;

InstructionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

InstructionContext.prototype.register = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RegisterContext);
    } else {
        return this.getTypedRuleContext(RegisterContext,i);
    }
};

InstructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterInstruction(this);
	}
};

InstructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitInstruction(this);
	}
};




asm8085Parser.InstructionContext = InstructionContext;

asm8085Parser.prototype.instruction = function() {

    var localctx = new InstructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, asm8085Parser.RULE_instruction);
    try {
        this.state = 207;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 68;
            this.match(asm8085Parser.T__1);
            this.state = 69;
            this.expression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 70;
            this.match(asm8085Parser.T__2);
            this.state = 71;
            this.register();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 72;
            this.match(asm8085Parser.T__3);
            this.state = 73;
            this.register();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 74;
            this.match(asm8085Parser.T__4);
            this.state = 75;
            this.expression();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 76;
            this.match(asm8085Parser.T__5);
            this.state = 77;
            this.register();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 78;
            this.match(asm8085Parser.T__6);
            this.state = 79;
            this.expression();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 80;
            this.match(asm8085Parser.T__7);
            this.state = 81;
            this.expression();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 82;
            this.match(asm8085Parser.T__8);
            this.state = 83;
            this.expression();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 84;
            this.match(asm8085Parser.T__9);
            this.state = 85;
            this.expression();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 86;
            this.match(asm8085Parser.T__10);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 87;
            this.match(asm8085Parser.T__11);
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 88;
            this.match(asm8085Parser.T__12);
            this.state = 89;
            this.register();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 90;
            this.match(asm8085Parser.T__13);
            this.state = 91;
            this.expression();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 92;
            this.match(asm8085Parser.T__14);
            this.state = 93;
            this.expression();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 94;
            this.match(asm8085Parser.T__15);
            this.state = 95;
            this.expression();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 96;
            this.match(asm8085Parser.T__16);
            this.state = 97;
            this.expression();
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 98;
            this.match(asm8085Parser.T__17);
            this.state = 99;
            this.expression();
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 100;
            this.match(asm8085Parser.T__18);
            this.state = 101;
            this.expression();
            break;

        case 19:
            this.enterOuterAlt(localctx, 19);
            this.state = 102;
            this.match(asm8085Parser.T__19);
            this.state = 103;
            this.expression();
            break;

        case 20:
            this.enterOuterAlt(localctx, 20);
            this.state = 104;
            this.match(asm8085Parser.T__20);
            break;

        case 21:
            this.enterOuterAlt(localctx, 21);
            this.state = 105;
            this.match(asm8085Parser.T__21);
            this.state = 106;
            this.register();
            break;

        case 22:
            this.enterOuterAlt(localctx, 22);
            this.state = 107;
            this.match(asm8085Parser.T__22);
            this.state = 108;
            this.register();
            break;

        case 23:
            this.enterOuterAlt(localctx, 23);
            this.state = 109;
            this.match(asm8085Parser.T__23);
            this.state = 110;
            this.register();
            break;

        case 24:
            this.enterOuterAlt(localctx, 24);
            this.state = 111;
            this.match(asm8085Parser.T__24);
            break;

        case 25:
            this.enterOuterAlt(localctx, 25);
            this.state = 112;
            this.match(asm8085Parser.T__25);
            break;

        case 26:
            this.enterOuterAlt(localctx, 26);
            this.state = 113;
            this.match(asm8085Parser.T__26);
            break;

        case 27:
            this.enterOuterAlt(localctx, 27);
            this.state = 114;
            this.match(asm8085Parser.T__27);
            this.state = 115;
            this.expression();
            break;

        case 28:
            this.enterOuterAlt(localctx, 28);
            this.state = 116;
            this.match(asm8085Parser.T__28);
            this.state = 117;
            this.register();
            break;

        case 29:
            this.enterOuterAlt(localctx, 29);
            this.state = 118;
            this.match(asm8085Parser.T__29);
            this.state = 119;
            this.register();
            break;

        case 30:
            this.enterOuterAlt(localctx, 30);
            this.state = 120;
            this.match(asm8085Parser.T__30);
            this.state = 121;
            this.expression();
            break;

        case 31:
            this.enterOuterAlt(localctx, 31);
            this.state = 122;
            this.match(asm8085Parser.T__31);
            this.state = 123;
            this.expression();
            break;

        case 32:
            this.enterOuterAlt(localctx, 32);
            this.state = 124;
            this.match(asm8085Parser.T__32);
            this.state = 125;
            this.expression();
            break;

        case 33:
            this.enterOuterAlt(localctx, 33);
            this.state = 126;
            this.match(asm8085Parser.T__33);
            this.state = 127;
            this.expression();
            break;

        case 34:
            this.enterOuterAlt(localctx, 34);
            this.state = 128;
            this.match(asm8085Parser.T__34);
            this.state = 129;
            this.expression();
            break;

        case 35:
            this.enterOuterAlt(localctx, 35);
            this.state = 130;
            this.match(asm8085Parser.T__35);
            this.state = 131;
            this.expression();
            break;

        case 36:
            this.enterOuterAlt(localctx, 36);
            this.state = 132;
            this.match(asm8085Parser.T__36);
            this.state = 133;
            this.expression();
            break;

        case 37:
            this.enterOuterAlt(localctx, 37);
            this.state = 134;
            this.match(asm8085Parser.T__37);
            this.state = 135;
            this.expression();
            break;

        case 38:
            this.enterOuterAlt(localctx, 38);
            this.state = 136;
            this.match(asm8085Parser.T__38);
            this.state = 137;
            this.expression();
            break;

        case 39:
            this.enterOuterAlt(localctx, 39);
            this.state = 138;
            this.match(asm8085Parser.T__39);
            this.state = 139;
            this.expression();
            break;

        case 40:
            this.enterOuterAlt(localctx, 40);
            this.state = 140;
            this.match(asm8085Parser.T__40);
            this.state = 141;
            this.register();
            break;

        case 41:
            this.enterOuterAlt(localctx, 41);
            this.state = 142;
            this.match(asm8085Parser.T__41);
            this.state = 143;
            this.expression();
            break;

        case 42:
            this.enterOuterAlt(localctx, 42);
            this.state = 144;
            this.match(asm8085Parser.T__42);
            this.state = 145;
            this.register();
            this.state = 146;
            this.match(asm8085Parser.T__43);
            this.state = 147;
            this.expression();
            break;

        case 43:
            this.enterOuterAlt(localctx, 43);
            this.state = 149;
            this.match(asm8085Parser.T__44);
            this.state = 150;
            this.register();
            this.state = 151;
            this.match(asm8085Parser.T__43);
            this.state = 152;
            this.register();
            break;

        case 44:
            this.enterOuterAlt(localctx, 44);
            this.state = 154;
            this.match(asm8085Parser.T__45);
            this.state = 155;
            this.register();
            this.state = 156;
            this.match(asm8085Parser.T__43);
            this.state = 157;
            this.expression();
            break;

        case 45:
            this.enterOuterAlt(localctx, 45);
            this.state = 159;
            this.match(asm8085Parser.T__46);
            break;

        case 46:
            this.enterOuterAlt(localctx, 46);
            this.state = 160;
            this.match(asm8085Parser.T__47);
            this.state = 161;
            this.register();
            break;

        case 47:
            this.enterOuterAlt(localctx, 47);
            this.state = 162;
            this.match(asm8085Parser.T__47);
            this.state = 163;
            this.expression();
            break;

        case 48:
            this.enterOuterAlt(localctx, 48);
            this.state = 164;
            this.match(asm8085Parser.T__48);
            this.state = 165;
            this.expression();
            break;

        case 49:
            this.enterOuterAlt(localctx, 49);
            this.state = 166;
            this.match(asm8085Parser.T__49);
            break;

        case 50:
            this.enterOuterAlt(localctx, 50);
            this.state = 167;
            this.match(asm8085Parser.T__50);
            this.state = 168;
            this.register();
            break;

        case 51:
            this.enterOuterAlt(localctx, 51);
            this.state = 169;
            this.match(asm8085Parser.T__51);
            this.state = 170;
            this.register();
            break;

        case 52:
            this.enterOuterAlt(localctx, 52);
            this.state = 171;
            this.match(asm8085Parser.T__52);
            break;

        case 53:
            this.enterOuterAlt(localctx, 53);
            this.state = 172;
            this.match(asm8085Parser.T__53);
            break;

        case 54:
            this.enterOuterAlt(localctx, 54);
            this.state = 173;
            this.match(asm8085Parser.T__54);
            break;

        case 55:
            this.enterOuterAlt(localctx, 55);
            this.state = 174;
            this.match(asm8085Parser.T__55);
            break;

        case 56:
            this.enterOuterAlt(localctx, 56);
            this.state = 175;
            this.match(asm8085Parser.T__56);
            break;

        case 57:
            this.enterOuterAlt(localctx, 57);
            this.state = 176;
            this.match(asm8085Parser.T__57);
            break;

        case 58:
            this.enterOuterAlt(localctx, 58);
            this.state = 177;
            this.match(asm8085Parser.T__58);
            break;

        case 59:
            this.enterOuterAlt(localctx, 59);
            this.state = 178;
            this.match(asm8085Parser.T__59);
            break;

        case 60:
            this.enterOuterAlt(localctx, 60);
            this.state = 179;
            this.match(asm8085Parser.T__60);
            break;

        case 61:
            this.enterOuterAlt(localctx, 61);
            this.state = 180;
            this.match(asm8085Parser.T__61);
            break;

        case 62:
            this.enterOuterAlt(localctx, 62);
            this.state = 181;
            this.match(asm8085Parser.T__62);
            break;

        case 63:
            this.enterOuterAlt(localctx, 63);
            this.state = 182;
            this.match(asm8085Parser.T__63);
            break;

        case 64:
            this.enterOuterAlt(localctx, 64);
            this.state = 183;
            this.match(asm8085Parser.T__64);
            break;

        case 65:
            this.enterOuterAlt(localctx, 65);
            this.state = 184;
            this.match(asm8085Parser.T__65);
            break;

        case 66:
            this.enterOuterAlt(localctx, 66);
            this.state = 185;
            this.match(asm8085Parser.T__66);
            this.state = 186;
            this.register();
            break;

        case 67:
            this.enterOuterAlt(localctx, 67);
            this.state = 187;
            this.match(asm8085Parser.T__67);
            this.state = 188;
            this.expression();
            break;

        case 68:
            this.enterOuterAlt(localctx, 68);
            this.state = 189;
            this.match(asm8085Parser.T__68);
            this.state = 190;
            this.expression();
            break;

        case 69:
            this.enterOuterAlt(localctx, 69);
            this.state = 191;
            this.match(asm8085Parser.T__69);
            break;

        case 70:
            this.enterOuterAlt(localctx, 70);
            this.state = 192;
            this.match(asm8085Parser.T__70);
            break;

        case 71:
            this.enterOuterAlt(localctx, 71);
            this.state = 193;
            this.match(asm8085Parser.T__71);
            this.state = 194;
            this.expression();
            break;

        case 72:
            this.enterOuterAlt(localctx, 72);
            this.state = 195;
            this.match(asm8085Parser.T__72);
            this.state = 196;
            this.register();
            break;

        case 73:
            this.enterOuterAlt(localctx, 73);
            this.state = 197;
            this.match(asm8085Parser.T__73);
            this.state = 198;
            this.register();
            break;

        case 74:
            this.enterOuterAlt(localctx, 74);
            this.state = 199;
            this.match(asm8085Parser.T__74);
            this.state = 200;
            this.expression();
            break;

        case 75:
            this.enterOuterAlt(localctx, 75);
            this.state = 201;
            this.match(asm8085Parser.T__75);
            break;

        case 76:
            this.enterOuterAlt(localctx, 76);
            this.state = 202;
            this.match(asm8085Parser.T__76);
            this.state = 203;
            this.register();
            break;

        case 77:
            this.enterOuterAlt(localctx, 77);
            this.state = 204;
            this.match(asm8085Parser.T__77);
            this.state = 205;
            this.expression();
            break;

        case 78:
            this.enterOuterAlt(localctx, 78);
            this.state = 206;
            this.match(asm8085Parser.T__78);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_directive;
    return this;
}

DirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DirectiveContext.prototype.constructor = DirectiveContext;


 
DirectiveContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DSEGContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DSEGContext.prototype = Object.create(DirectiveContext.prototype);
DSEGContext.prototype.constructor = DSEGContext;

asm8085Parser.DSEGContext = DSEGContext;

DSEGContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterDSEG(this);
	}
};

DSEGContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitDSEG(this);
	}
};


function SETContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SETContext.prototype = Object.create(DirectiveContext.prototype);
SETContext.prototype.constructor = SETContext;

asm8085Parser.SETContext = SETContext;

SETContext.prototype.LABEL = function() {
    return this.getToken(asm8085Parser.LABEL, 0);
};

SETContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SETContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterSET(this);
	}
};

SETContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitSET(this);
	}
};


function ORGContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ORGContext.prototype = Object.create(DirectiveContext.prototype);
ORGContext.prototype.constructor = ORGContext;

asm8085Parser.ORGContext = ORGContext;

ORGContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ORGContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterORG(this);
	}
};

ORGContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitORG(this);
	}
};


function ASEGContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ASEGContext.prototype = Object.create(DirectiveContext.prototype);
ASEGContext.prototype.constructor = ASEGContext;

asm8085Parser.ASEGContext = ASEGContext;

ASEGContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterASEG(this);
	}
};

ASEGContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitASEG(this);
	}
};


function CSEGContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CSEGContext.prototype = Object.create(DirectiveContext.prototype);
CSEGContext.prototype.constructor = CSEGContext;

asm8085Parser.CSEGContext = CSEGContext;

CSEGContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterCSEG(this);
	}
};

CSEGContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitCSEG(this);
	}
};


function DBContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DBContext.prototype = Object.create(DirectiveContext.prototype);
DBContext.prototype.constructor = DBContext;

asm8085Parser.DBContext = DBContext;

DBContext.prototype.expressionlist = function() {
    return this.getTypedRuleContext(ExpressionlistContext,0);
};
DBContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterDB(this);
	}
};

DBContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitDB(this);
	}
};


function DSContext(parser, ctx) {
	DirectiveContext.call(this, parser);
    DirectiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DSContext.prototype = Object.create(DirectiveContext.prototype);
DSContext.prototype.constructor = DSContext;

asm8085Parser.DSContext = DSContext;

DSContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
DSContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterDS(this);
	}
};

DSContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitDS(this);
	}
};



asm8085Parser.DirectiveContext = DirectiveContext;

asm8085Parser.prototype.directive = function() {

    var localctx = new DirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, asm8085Parser.RULE_directive);
    try {
        this.state = 221;
        switch(this._input.LA(1)) {
        case asm8085Parser.T__79:
            localctx = new DBContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 209;
            this.match(asm8085Parser.T__79);
            this.state = 210;
            this.expressionlist();
            break;
        case asm8085Parser.T__80:
            localctx = new DSContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 211;
            this.match(asm8085Parser.T__80);
            this.state = 212;
            this.expression();
            break;
        case asm8085Parser.T__81:
            localctx = new ORGContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 213;
            this.match(asm8085Parser.T__81);
            this.state = 214;
            this.expression();
            break;
        case asm8085Parser.LABEL:
            localctx = new SETContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 215;
            this.match(asm8085Parser.LABEL);
            this.state = 216;
            this.match(asm8085Parser.T__82);
            this.state = 217;
            this.expression();
            break;
        case asm8085Parser.T__83:
            localctx = new ASEGContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 218;
            this.match(asm8085Parser.T__83);
            break;
        case asm8085Parser.T__84:
            localctx = new CSEGContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 219;
            this.match(asm8085Parser.T__84);
            break;
        case asm8085Parser.T__85:
            localctx = new DSEGContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 220;
            this.match(asm8085Parser.T__85);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RegisterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_register;
    return this;
}

RegisterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegisterContext.prototype.constructor = RegisterContext;

RegisterContext.prototype.REGISTER = function() {
    return this.getToken(asm8085Parser.REGISTER, 0);
};

RegisterContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterRegister(this);
	}
};

RegisterContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitRegister(this);
	}
};




asm8085Parser.RegisterContext = RegisterContext;

asm8085Parser.prototype.register = function() {

    var localctx = new RegisterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, asm8085Parser.RULE_register);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(asm8085Parser.REGISTER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabeloperandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_labeloperand;
    return this;
}

LabeloperandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabeloperandContext.prototype.constructor = LabeloperandContext;

LabeloperandContext.prototype.LABEL = function() {
    return this.getToken(asm8085Parser.LABEL, 0);
};

LabeloperandContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterLabeloperand(this);
	}
};

LabeloperandContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitLabeloperand(this);
	}
};




asm8085Parser.LabeloperandContext = LabeloperandContext;

asm8085Parser.prototype.labeloperand = function() {

    var localctx = new LabeloperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, asm8085Parser.RULE_labeloperand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(asm8085Parser.LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LocationcounteroperandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_locationcounteroperand;
    return this;
}

LocationcounteroperandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LocationcounteroperandContext.prototype.constructor = LocationcounteroperandContext;


LocationcounteroperandContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterLocationcounteroperand(this);
	}
};

LocationcounteroperandContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitLocationcounteroperand(this);
	}
};




asm8085Parser.LocationcounteroperandContext = LocationcounteroperandContext;

asm8085Parser.prototype.locationcounteroperand = function() {

    var localctx = new LocationcounteroperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, asm8085Parser.RULE_locationcounteroperand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(asm8085Parser.T__86);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_expressionlist;
    return this;
}

ExpressionlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionlistContext.prototype.constructor = ExpressionlistContext;

ExpressionlistContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionlistContext.prototype.expressionlist = function() {
    return this.getTypedRuleContext(ExpressionlistContext,0);
};

ExpressionlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterExpressionlist(this);
	}
};

ExpressionlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitExpressionlist(this);
	}
};




asm8085Parser.ExpressionlistContext = ExpressionlistContext;

asm8085Parser.prototype.expressionlist = function() {

    var localctx = new ExpressionlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, asm8085Parser.RULE_expressionlist);
    try {
        this.state = 234;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 229;
            this.expression();
            this.state = 230;
            this.match(asm8085Parser.T__43);
            this.state = 231;
            this.expressionlist();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 233;
            this.expression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PlusContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PlusContext.prototype = Object.create(ExpressionContext.prototype);
PlusContext.prototype.constructor = PlusContext;

asm8085Parser.PlusContext = PlusContext;

PlusContext.prototype.multexpression = function() {
    return this.getTypedRuleContext(MultexpressionContext,0);
};

PlusContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PlusContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterPlus(this);
	}
};

PlusContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitPlus(this);
	}
};


function MinusContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MinusContext.prototype = Object.create(ExpressionContext.prototype);
MinusContext.prototype.constructor = MinusContext;

asm8085Parser.MinusContext = MinusContext;

MinusContext.prototype.multexpression = function() {
    return this.getTypedRuleContext(MultexpressionContext,0);
};

MinusContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
MinusContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterMinus(this);
	}
};

MinusContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitMinus(this);
	}
};


function MultExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultExpressionContext.prototype = Object.create(ExpressionContext.prototype);
MultExpressionContext.prototype.constructor = MultExpressionContext;

asm8085Parser.MultExpressionContext = MultExpressionContext;

MultExpressionContext.prototype.multexpression = function() {
    return this.getTypedRuleContext(MultexpressionContext,0);
};
MultExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterMultExpression(this);
	}
};

MultExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitMultExpression(this);
	}
};



asm8085Parser.ExpressionContext = ExpressionContext;

asm8085Parser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, asm8085Parser.RULE_expression);
    try {
        this.state = 245;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PlusContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 236;
            this.multexpression();
            this.state = 237;
            this.match(asm8085Parser.T__87);
            this.state = 238;
            this.expression();
            break;

        case 2:
            localctx = new MinusContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 240;
            this.multexpression();
            this.state = 241;
            this.match(asm8085Parser.T__88);
            this.state = 242;
            this.expression();
            break;

        case 3:
            localctx = new MultExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 244;
            this.multexpression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultexpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_multexpression;
    return this;
}

MultexpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultexpressionContext.prototype.constructor = MultexpressionContext;


 
MultexpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DivContext(parser, ctx) {
	MultexpressionContext.call(this, parser);
    MultexpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivContext.prototype = Object.create(MultexpressionContext.prototype);
DivContext.prototype.constructor = DivContext;

asm8085Parser.DivContext = DivContext;

DivContext.prototype.parenexpression = function() {
    return this.getTypedRuleContext(ParenexpressionContext,0);
};

DivContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
DivContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterDiv(this);
	}
};

DivContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitDiv(this);
	}
};


function ModContext(parser, ctx) {
	MultexpressionContext.call(this, parser);
    MultexpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModContext.prototype = Object.create(MultexpressionContext.prototype);
ModContext.prototype.constructor = ModContext;

asm8085Parser.ModContext = ModContext;

ModContext.prototype.parenexpression = function() {
    return this.getTypedRuleContext(ParenexpressionContext,0);
};

ModContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ModContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterMod(this);
	}
};

ModContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitMod(this);
	}
};


function MultContext(parser, ctx) {
	MultexpressionContext.call(this, parser);
    MultexpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultContext.prototype = Object.create(MultexpressionContext.prototype);
MultContext.prototype.constructor = MultContext;

asm8085Parser.MultContext = MultContext;

MultContext.prototype.parenexpression = function() {
    return this.getTypedRuleContext(ParenexpressionContext,0);
};

MultContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
MultContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterMult(this);
	}
};

MultContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitMult(this);
	}
};


function ParenExpressionContext(parser, ctx) {
	MultexpressionContext.call(this, parser);
    MultexpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExpressionContext.prototype = Object.create(MultexpressionContext.prototype);
ParenExpressionContext.prototype.constructor = ParenExpressionContext;

asm8085Parser.ParenExpressionContext = ParenExpressionContext;

ParenExpressionContext.prototype.parenexpression = function() {
    return this.getTypedRuleContext(ParenexpressionContext,0);
};
ParenExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterParenExpression(this);
	}
};

ParenExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitParenExpression(this);
	}
};



asm8085Parser.MultexpressionContext = MultexpressionContext;

asm8085Parser.prototype.multexpression = function() {

    var localctx = new MultexpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, asm8085Parser.RULE_multexpression);
    try {
        this.state = 260;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            localctx = new MultContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 247;
            this.parenexpression();
            this.state = 248;
            this.match(asm8085Parser.T__89);
            this.state = 249;
            this.expression();
            break;

        case 2:
            localctx = new DivContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 251;
            this.parenexpression();
            this.state = 252;
            this.match(asm8085Parser.T__90);
            this.state = 253;
            this.expression();
            break;

        case 3:
            localctx = new ModContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 255;
            this.parenexpression();
            this.state = 256;
            this.match(asm8085Parser.T__91);
            this.state = 257;
            this.expression();
            break;

        case 4:
            localctx = new ParenExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 259;
            this.parenexpression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParenexpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_parenexpression;
    return this;
}

ParenexpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParenexpressionContext.prototype.constructor = ParenexpressionContext;

ParenexpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ParenexpressionContext.prototype.immediate = function() {
    return this.getTypedRuleContext(ImmediateContext,0);
};

ParenexpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterParenexpression(this);
	}
};

ParenexpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitParenexpression(this);
	}
};




asm8085Parser.ParenexpressionContext = ParenexpressionContext;

asm8085Parser.prototype.parenexpression = function() {

    var localctx = new ParenexpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, asm8085Parser.RULE_parenexpression);
    try {
        this.state = 267;
        switch(this._input.LA(1)) {
        case asm8085Parser.T__92:
            this.enterOuterAlt(localctx, 1);
            this.state = 262;
            this.match(asm8085Parser.T__92);
            this.state = 263;
            this.expression();
            this.state = 264;
            this.match(asm8085Parser.T__93);
            break;
        case asm8085Parser.T__86:
        case asm8085Parser.HEX:
        case asm8085Parser.OCT:
        case asm8085Parser.BIN:
        case asm8085Parser.DEC:
        case asm8085Parser.STR:
        case asm8085Parser.LABEL:
            this.enterOuterAlt(localctx, 2);
            this.state = 266;
            this.immediate();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImmediateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_immediate;
    return this;
}

ImmediateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImmediateContext.prototype.constructor = ImmediateContext;

ImmediateContext.prototype.hex = function() {
    return this.getTypedRuleContext(HexContext,0);
};

ImmediateContext.prototype.oct = function() {
    return this.getTypedRuleContext(OctContext,0);
};

ImmediateContext.prototype.bin = function() {
    return this.getTypedRuleContext(BinContext,0);
};

ImmediateContext.prototype.dec = function() {
    return this.getTypedRuleContext(DecContext,0);
};

ImmediateContext.prototype.str = function() {
    return this.getTypedRuleContext(StrContext,0);
};

ImmediateContext.prototype.labeloperand = function() {
    return this.getTypedRuleContext(LabeloperandContext,0);
};

ImmediateContext.prototype.locationcounteroperand = function() {
    return this.getTypedRuleContext(LocationcounteroperandContext,0);
};

ImmediateContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterImmediate(this);
	}
};

ImmediateContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitImmediate(this);
	}
};




asm8085Parser.ImmediateContext = ImmediateContext;

asm8085Parser.prototype.immediate = function() {

    var localctx = new ImmediateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, asm8085Parser.RULE_immediate);
    try {
        this.state = 276;
        switch(this._input.LA(1)) {
        case asm8085Parser.HEX:
            this.enterOuterAlt(localctx, 1);
            this.state = 269;
            this.hex();
            break;
        case asm8085Parser.OCT:
            this.enterOuterAlt(localctx, 2);
            this.state = 270;
            this.oct();
            break;
        case asm8085Parser.BIN:
            this.enterOuterAlt(localctx, 3);
            this.state = 271;
            this.bin();
            break;
        case asm8085Parser.DEC:
            this.enterOuterAlt(localctx, 4);
            this.state = 272;
            this.dec();
            break;
        case asm8085Parser.STR:
            this.enterOuterAlt(localctx, 5);
            this.state = 273;
            this.str();
            break;
        case asm8085Parser.LABEL:
            this.enterOuterAlt(localctx, 6);
            this.state = 274;
            this.labeloperand();
            break;
        case asm8085Parser.T__86:
            this.enterOuterAlt(localctx, 7);
            this.state = 275;
            this.locationcounteroperand();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_hex;
    return this;
}

HexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HexContext.prototype.constructor = HexContext;

HexContext.prototype.HEX = function() {
    return this.getToken(asm8085Parser.HEX, 0);
};

HexContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterHex(this);
	}
};

HexContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitHex(this);
	}
};




asm8085Parser.HexContext = HexContext;

asm8085Parser.prototype.hex = function() {

    var localctx = new HexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, asm8085Parser.RULE_hex);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        this.match(asm8085Parser.HEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OctContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_oct;
    return this;
}

OctContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OctContext.prototype.constructor = OctContext;

OctContext.prototype.OCT = function() {
    return this.getToken(asm8085Parser.OCT, 0);
};

OctContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterOct(this);
	}
};

OctContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitOct(this);
	}
};




asm8085Parser.OctContext = OctContext;

asm8085Parser.prototype.oct = function() {

    var localctx = new OctContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, asm8085Parser.RULE_oct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this.match(asm8085Parser.OCT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_bin;
    return this;
}

BinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinContext.prototype.constructor = BinContext;

BinContext.prototype.BIN = function() {
    return this.getToken(asm8085Parser.BIN, 0);
};

BinContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterBin(this);
	}
};

BinContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitBin(this);
	}
};




asm8085Parser.BinContext = BinContext;

asm8085Parser.prototype.bin = function() {

    var localctx = new BinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, asm8085Parser.RULE_bin);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        this.match(asm8085Parser.BIN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_dec;
    return this;
}

DecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DecContext.prototype.constructor = DecContext;

DecContext.prototype.DEC = function() {
    return this.getToken(asm8085Parser.DEC, 0);
};

DecContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterDec(this);
	}
};

DecContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitDec(this);
	}
};




asm8085Parser.DecContext = DecContext;

asm8085Parser.prototype.dec = function() {

    var localctx = new DecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, asm8085Parser.RULE_dec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(asm8085Parser.DEC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = asm8085Parser.RULE_str;
    return this;
}

StrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StrContext.prototype.constructor = StrContext;

StrContext.prototype.STR = function() {
    return this.getToken(asm8085Parser.STR, 0);
};

StrContext.prototype.enterRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.enterStr(this);
	}
};

StrContext.prototype.exitRule = function(listener) {
    if(listener instanceof asm8085Listener ) {
        listener.exitStr(this);
	}
};




asm8085Parser.StrContext = StrContext;

asm8085Parser.prototype.str = function() {

    var localctx = new StrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, asm8085Parser.RULE_str);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.match(asm8085Parser.STR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.asm8085Parser = asm8085Parser;
