// Generated from libs/grammar/asm8085.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002f\u0266\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0004H\tH\u0004I\tI\u0004J\tJ\u0004K\tK\u0004L\tL\u0004",
    "M\tM\u0004N\tN\u0004O\tO\u0004P\tP\u0004Q\tQ\u0004R\tR\u0004S\tS\u0004",
    "T\tT\u0004U\tU\u0004V\tV\u0004W\tW\u0004X\tX\u0004Y\tY\u0004Z\tZ\u0004",
    "[\t[\u0004\\\t\\\u0004]\t]\u0004^\t^\u0004_\t_\u0004`\t`\u0004a\ta\u0004",
    "b\tb\u0004c\tc\u0004d\td\u0004e\te\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003\"",
    "\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003",
    "$\u0003$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)",
    "\u0003*\u0003*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003,\u0003,\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003.\u0003",
    ".\u0003/\u0003/\u0003/\u0003/\u00030\u00030\u00030\u00030\u00031\u0003",
    "1\u00031\u00031\u00032\u00032\u00032\u00032\u00033\u00033\u00033\u0003",
    "3\u00033\u00034\u00034\u00034\u00034\u00035\u00035\u00035\u00035\u0003",
    "5\u00036\u00036\u00036\u00036\u00037\u00037\u00037\u00037\u00038\u0003",
    "8\u00038\u00039\u00039\u00039\u00039\u0003:\u0003:\u0003:\u0003:\u0003",
    ";\u0003;\u0003;\u0003;\u0003<\u0003<\u0003<\u0003=\u0003=\u0003=\u0003",
    "=\u0003>\u0003>\u0003>\u0003>\u0003?\u0003?\u0003?\u0003@\u0003@\u0003",
    "@\u0003@\u0003A\u0003A\u0003A\u0003A\u0003B\u0003B\u0003B\u0003B\u0003",
    "C\u0003C\u0003C\u0003D\u0003D\u0003D\u0003D\u0003E\u0003E\u0003E\u0003",
    "E\u0003F\u0003F\u0003F\u0003F\u0003F\u0003G\u0003G\u0003G\u0003G\u0003",
    "H\u0003H\u0003H\u0003H\u0003H\u0003I\u0003I\u0003I\u0003I\u0003J\u0003",
    "J\u0003J\u0003J\u0003J\u0003K\u0003K\u0003K\u0003K\u0003L\u0003L\u0003",
    "L\u0003L\u0003M\u0003M\u0003M\u0003M\u0003M\u0003N\u0003N\u0003N\u0003",
    "N\u0003O\u0003O\u0003O\u0003O\u0003P\u0003P\u0003P\u0003P\u0003P\u0003",
    "Q\u0003Q\u0003Q\u0003R\u0003R\u0003R\u0003S\u0003S\u0003S\u0003S\u0003",
    "T\u0003T\u0003U\u0003U\u0003V\u0003V\u0003W\u0003W\u0003X\u0003X\u0003",
    "Y\u0003Y\u0003Y\u0003Y\u0003Z\u0003Z\u0003[\u0003[\u0003\\\u0003\\\u0003",
    "\\\u0003\\\u0003\\\u0003\\\u0005\\\u0221\n\\\u0003]\u0006]\u0224\n]",
    "\r]\u000e]\u0225\u0003]\u0003]\u0003^\u0006^\u022b\n^\r^\u000e^\u022c",
    "\u0003^\u0003^\u0003_\u0006_\u0232\n_\r_\u000e_\u0233\u0003_\u0003_",
    "\u0003`\u0006`\u0239\n`\r`\u000e`\u023a\u0003`\u0003`\u0006`\u023f\n",
    "`\r`\u000e`\u0240\u0005`\u0243\n`\u0003a\u0003a\u0007a\u0247\na\fa\u000e",
    "a\u024a\u000ba\u0003a\u0003a\u0003b\u0005b\u024f\nb\u0003b\u0003b\u0003",
    "c\u0003c\u0007c\u0255\nc\fc\u000ec\u0258\u000bc\u0003d\u0003d\u0007",
    "d\u025c\nd\fd\u000ed\u025f\u000bd\u0003d\u0003d\u0003e\u0003e\u0003",
    "e\u0003e\u0002\u0002f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b",
    "\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+",
    "\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A",
    "\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q:s;u<w=y>{?}@\u007f",
    "A\u0081B\u0083C\u0085D\u0087E\u0089F\u008bG\u008dH\u008fI\u0091J\u0093",
    "K\u0095L\u0097M\u0099N\u009bO\u009dP\u009fQ\u00a1R\u00a3S\u00a5T\u00a7",
    "U\u00a9V\u00abW\u00adX\u00afY\u00b1Z\u00b3[\u00b5\\\u00b7]\u00b9^\u00bb",
    "_\u00bd`\u00bfa\u00c1b\u00c3c\u00c5d\u00c7e\u00c9f\u0003\u0002\f\u0005",
    "\u0002CGJJNO\u0004\u00022;CH\u0003\u000229\u0003\u000223\u0003\u0002",
    "2;\u0003\u0002))\u0003\u0002C\\\u0004\u00022;C\\\u0004\u0002\f\f\u000f",
    "\u000f\u0004\u0002\u000b\u000b\"\"\u0271\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002",
    "\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002",
    ")\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003",
    "\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002",
    "\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002",
    "\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002",
    "\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002",
    "?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003",
    "\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002",
    "\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002",
    "\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002",
    "\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002",
    "U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003",
    "\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002",
    "\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002",
    "\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002",
    "\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002\u0002\u0002",
    "k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002\u0002\u0002\u0002o\u0003",
    "\u0002\u0002\u0002\u0002q\u0003\u0002\u0002\u0002\u0002s\u0003\u0002",
    "\u0002\u0002\u0002u\u0003\u0002\u0002\u0002\u0002w\u0003\u0002\u0002",
    "\u0002\u0002y\u0003\u0002\u0002\u0002\u0002{\u0003\u0002\u0002\u0002",
    "\u0002}\u0003\u0002\u0002\u0002\u0002\u007f\u0003\u0002\u0002\u0002",
    "\u0002\u0081\u0003\u0002\u0002\u0002\u0002\u0083\u0003\u0002\u0002\u0002",
    "\u0002\u0085\u0003\u0002\u0002\u0002\u0002\u0087\u0003\u0002\u0002\u0002",
    "\u0002\u0089\u0003\u0002\u0002\u0002\u0002\u008b\u0003\u0002\u0002\u0002",
    "\u0002\u008d\u0003\u0002\u0002\u0002\u0002\u008f\u0003\u0002\u0002\u0002",
    "\u0002\u0091\u0003\u0002\u0002\u0002\u0002\u0093\u0003\u0002\u0002\u0002",
    "\u0002\u0095\u0003\u0002\u0002\u0002\u0002\u0097\u0003\u0002\u0002\u0002",
    "\u0002\u0099\u0003\u0002\u0002\u0002\u0002\u009b\u0003\u0002\u0002\u0002",
    "\u0002\u009d\u0003\u0002\u0002\u0002\u0002\u009f\u0003\u0002\u0002\u0002",
    "\u0002\u00a1\u0003\u0002\u0002\u0002\u0002\u00a3\u0003\u0002\u0002\u0002",
    "\u0002\u00a5\u0003\u0002\u0002\u0002\u0002\u00a7\u0003\u0002\u0002\u0002",
    "\u0002\u00a9\u0003\u0002\u0002\u0002\u0002\u00ab\u0003\u0002\u0002\u0002",
    "\u0002\u00ad\u0003\u0002\u0002\u0002\u0002\u00af\u0003\u0002\u0002\u0002",
    "\u0002\u00b1\u0003\u0002\u0002\u0002\u0002\u00b3\u0003\u0002\u0002\u0002",
    "\u0002\u00b5\u0003\u0002\u0002\u0002\u0002\u00b7\u0003\u0002\u0002\u0002",
    "\u0002\u00b9\u0003\u0002\u0002\u0002\u0002\u00bb\u0003\u0002\u0002\u0002",
    "\u0002\u00bd\u0003\u0002\u0002\u0002\u0002\u00bf\u0003\u0002\u0002\u0002",
    "\u0002\u00c1\u0003\u0002\u0002\u0002\u0002\u00c3\u0003\u0002\u0002\u0002",
    "\u0002\u00c5\u0003\u0002\u0002\u0002\u0002\u00c7\u0003\u0002\u0002\u0002",
    "\u0002\u00c9\u0003\u0002\u0002\u0002\u0003\u00cb\u0003\u0002\u0002\u0002",
    "\u0005\u00cd\u0003\u0002\u0002\u0002\u0007\u00d1\u0003\u0002\u0002\u0002",
    "\t\u00d5\u0003\u0002\u0002\u0002\u000b\u00d9\u0003\u0002\u0002\u0002",
    "\r\u00dd\u0003\u0002\u0002\u0002\u000f\u00e1\u0003\u0002\u0002\u0002",
    "\u0011\u00e5\u0003\u0002\u0002\u0002\u0013\u00ea\u0003\u0002\u0002\u0002",
    "\u0015\u00ed\u0003\u0002\u0002\u0002\u0017\u00f0\u0003\u0002\u0002\u0002",
    "\u0019\u00f4\u0003\u0002\u0002\u0002\u001b\u00f8\u0003\u0002\u0002\u0002",
    "\u001d\u00fc\u0003\u0002\u0002\u0002\u001f\u0100\u0003\u0002\u0002\u0002",
    "!\u0104\u0003\u0002\u0002\u0002#\u0107\u0003\u0002\u0002\u0002%\u010b",
    "\u0003\u0002\u0002\u0002\'\u010f\u0003\u0002\u0002\u0002)\u0113\u0003",
    "\u0002\u0002\u0002+\u0116\u0003\u0002\u0002\u0002-\u011a\u0003\u0002",
    "\u0002\u0002/\u011e\u0003\u0002\u0002\u00021\u0122\u0003\u0002\u0002",
    "\u00023\u0126\u0003\u0002\u0002\u00025\u0129\u0003\u0002\u0002\u0002",
    "7\u012c\u0003\u0002\u0002\u00029\u0130\u0003\u0002\u0002\u0002;\u0133",
    "\u0003\u0002\u0002\u0002=\u0137\u0003\u0002\u0002\u0002?\u013b\u0003",
    "\u0002\u0002\u0002A\u013e\u0003\u0002\u0002\u0002C\u0141\u0003\u0002",
    "\u0002\u0002E\u0145\u0003\u0002\u0002\u0002G\u0149\u0003\u0002\u0002",
    "\u0002I\u014d\u0003\u0002\u0002\u0002K\u0150\u0003\u0002\u0002\u0002",
    "M\u0154\u0003\u0002\u0002\u0002O\u0158\u0003\u0002\u0002\u0002Q\u015b",
    "\u0003\u0002\u0002\u0002S\u015f\u0003\u0002\u0002\u0002U\u0164\u0003",
    "\u0002\u0002\u0002W\u0169\u0003\u0002\u0002\u0002Y\u016d\u0003\u0002",
    "\u0002\u0002[\u016f\u0003\u0002\u0002\u0002]\u0173\u0003\u0002\u0002",
    "\u0002_\u0177\u0003\u0002\u0002\u0002a\u017b\u0003\u0002\u0002\u0002",
    "c\u017f\u0003\u0002\u0002\u0002e\u0183\u0003\u0002\u0002\u0002g\u0188",
    "\u0003\u0002\u0002\u0002i\u018c\u0003\u0002\u0002\u0002k\u0191\u0003",
    "\u0002\u0002\u0002m\u0195\u0003\u0002\u0002\u0002o\u0199\u0003\u0002",
    "\u0002\u0002q\u019c\u0003\u0002\u0002\u0002s\u01a0\u0003\u0002\u0002",
    "\u0002u\u01a4\u0003\u0002\u0002\u0002w\u01a8\u0003\u0002\u0002\u0002",
    "y\u01ab\u0003\u0002\u0002\u0002{\u01af\u0003\u0002\u0002\u0002}\u01b3",
    "\u0003\u0002\u0002\u0002\u007f\u01b6\u0003\u0002\u0002\u0002\u0081\u01ba",
    "\u0003\u0002\u0002\u0002\u0083\u01be\u0003\u0002\u0002\u0002\u0085\u01c2",
    "\u0003\u0002\u0002\u0002\u0087\u01c5\u0003\u0002\u0002\u0002\u0089\u01c9",
    "\u0003\u0002\u0002\u0002\u008b\u01cd\u0003\u0002\u0002\u0002\u008d\u01d2",
    "\u0003\u0002\u0002\u0002\u008f\u01d6\u0003\u0002\u0002\u0002\u0091\u01db",
    "\u0003\u0002\u0002\u0002\u0093\u01df\u0003\u0002\u0002\u0002\u0095\u01e4",
    "\u0003\u0002\u0002\u0002\u0097\u01e8\u0003\u0002\u0002\u0002\u0099\u01ec",
    "\u0003\u0002\u0002\u0002\u009b\u01f1\u0003\u0002\u0002\u0002\u009d\u01f5",
    "\u0003\u0002\u0002\u0002\u009f\u01f9\u0003\u0002\u0002\u0002\u00a1\u01fe",
    "\u0003\u0002\u0002\u0002\u00a3\u0201\u0003\u0002\u0002\u0002\u00a5\u0204",
    "\u0003\u0002\u0002\u0002\u00a7\u0208\u0003\u0002\u0002\u0002\u00a9\u020a",
    "\u0003\u0002\u0002\u0002\u00ab\u020c\u0003\u0002\u0002\u0002\u00ad\u020e",
    "\u0003\u0002\u0002\u0002\u00af\u0210\u0003\u0002\u0002\u0002\u00b1\u0212",
    "\u0003\u0002\u0002\u0002\u00b3\u0216\u0003\u0002\u0002\u0002\u00b5\u0218",
    "\u0003\u0002\u0002\u0002\u00b7\u0220\u0003\u0002\u0002\u0002\u00b9\u0223",
    "\u0003\u0002\u0002\u0002\u00bb\u022a\u0003\u0002\u0002\u0002\u00bd\u0231",
    "\u0003\u0002\u0002\u0002\u00bf\u0242\u0003\u0002\u0002\u0002\u00c1\u0244",
    "\u0003\u0002\u0002\u0002\u00c3\u024e\u0003\u0002\u0002\u0002\u00c5\u0252",
    "\u0003\u0002\u0002\u0002\u00c7\u0259\u0003\u0002\u0002\u0002\u00c9\u0262",
    "\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007<\u0002\u0002\u00cc\u0004",
    "\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007C\u0002\u0002\u00ce\u00cf",
    "\u0007E\u0002\u0002\u00cf\u00d0\u0007K\u0002\u0002\u00d0\u0006\u0003",
    "\u0002\u0002\u0002\u00d1\u00d2\u0007C\u0002\u0002\u00d2\u00d3\u0007",
    "F\u0002\u0002\u00d3\u00d4\u0007E\u0002\u0002\u00d4\b\u0003\u0002\u0002",
    "\u0002\u00d5\u00d6\u0007C\u0002\u0002\u00d6\u00d7\u0007F\u0002\u0002",
    "\u00d7\u00d8\u0007F\u0002\u0002\u00d8\n\u0003\u0002\u0002\u0002\u00d9",
    "\u00da\u0007C\u0002\u0002\u00da\u00db\u0007F\u0002\u0002\u00db\u00dc",
    "\u0007K\u0002\u0002\u00dc\f\u0003\u0002\u0002\u0002\u00dd\u00de\u0007",
    "C\u0002\u0002\u00de\u00df\u0007P\u0002\u0002\u00df\u00e0\u0007C\u0002",
    "\u0002\u00e0\u000e\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007C\u0002",
    "\u0002\u00e2\u00e3\u0007P\u0002\u0002\u00e3\u00e4\u0007K\u0002\u0002",
    "\u00e4\u0010\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007E\u0002\u0002",
    "\u00e6\u00e7\u0007C\u0002\u0002\u00e7\u00e8\u0007N\u0002\u0002\u00e8",
    "\u00e9\u0007N\u0002\u0002\u00e9\u0012\u0003\u0002\u0002\u0002\u00ea",
    "\u00eb\u0007E\u0002\u0002\u00eb\u00ec\u0007E\u0002\u0002\u00ec\u0014",
    "\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007E\u0002\u0002\u00ee\u00ef",
    "\u0007O\u0002\u0002\u00ef\u0016\u0003\u0002\u0002\u0002\u00f0\u00f1",
    "\u0007E\u0002\u0002\u00f1\u00f2\u0007O\u0002\u0002\u00f2\u00f3\u0007",
    "C\u0002\u0002\u00f3\u0018\u0003\u0002\u0002\u0002\u00f4\u00f5\u0007",
    "E\u0002\u0002\u00f5\u00f6\u0007O\u0002\u0002\u00f6\u00f7\u0007E\u0002",
    "\u0002\u00f7\u001a\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007E\u0002",
    "\u0002\u00f9\u00fa\u0007O\u0002\u0002\u00fa\u00fb\u0007R\u0002\u0002",
    "\u00fb\u001c\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007E\u0002\u0002",
    "\u00fd\u00fe\u0007P\u0002\u0002\u00fe\u00ff\u0007E\u0002\u0002\u00ff",
    "\u001e\u0003\u0002\u0002\u0002\u0100\u0101\u0007E\u0002\u0002\u0101",
    "\u0102\u0007P\u0002\u0002\u0102\u0103\u0007\\\u0002\u0002\u0103 \u0003",
    "\u0002\u0002\u0002\u0104\u0105\u0007E\u0002\u0002\u0105\u0106\u0007",
    "R\u0002\u0002\u0106\"\u0003\u0002\u0002\u0002\u0107\u0108\u0007E\u0002",
    "\u0002\u0108\u0109\u0007R\u0002\u0002\u0109\u010a\u0007G\u0002\u0002",
    "\u010a$\u0003\u0002\u0002\u0002\u010b\u010c\u0007E\u0002\u0002\u010c",
    "\u010d\u0007R\u0002\u0002\u010d\u010e\u0007K\u0002\u0002\u010e&\u0003",
    "\u0002\u0002\u0002\u010f\u0110\u0007E\u0002\u0002\u0110\u0111\u0007",
    "R\u0002\u0002\u0111\u0112\u0007Q\u0002\u0002\u0112(\u0003\u0002\u0002",
    "\u0002\u0113\u0114\u0007E\u0002\u0002\u0114\u0115\u0007\\\u0002\u0002",
    "\u0115*\u0003\u0002\u0002\u0002\u0116\u0117\u0007F\u0002\u0002\u0117",
    "\u0118\u0007C\u0002\u0002\u0118\u0119\u0007C\u0002\u0002\u0119,\u0003",
    "\u0002\u0002\u0002\u011a\u011b\u0007F\u0002\u0002\u011b\u011c\u0007",
    "C\u0002\u0002\u011c\u011d\u0007F\u0002\u0002\u011d.\u0003\u0002\u0002",
    "\u0002\u011e\u011f\u0007F\u0002\u0002\u011f\u0120\u0007E\u0002\u0002",
    "\u0120\u0121\u0007T\u0002\u0002\u01210\u0003\u0002\u0002\u0002\u0122",
    "\u0123\u0007F\u0002\u0002\u0123\u0124\u0007E\u0002\u0002\u0124\u0125",
    "\u0007Z\u0002\u0002\u01252\u0003\u0002\u0002\u0002\u0126\u0127\u0007",
    "F\u0002\u0002\u0127\u0128\u0007K\u0002\u0002\u01284\u0003\u0002\u0002",
    "\u0002\u0129\u012a\u0007G\u0002\u0002\u012a\u012b\u0007K\u0002\u0002",
    "\u012b6\u0003\u0002\u0002\u0002\u012c\u012d\u0007J\u0002\u0002\u012d",
    "\u012e\u0007N\u0002\u0002\u012e\u012f\u0007V\u0002\u0002\u012f8\u0003",
    "\u0002\u0002\u0002\u0130\u0131\u0007K\u0002\u0002\u0131\u0132\u0007",
    "P\u0002\u0002\u0132:\u0003\u0002\u0002\u0002\u0133\u0134\u0007K\u0002",
    "\u0002\u0134\u0135\u0007P\u0002\u0002\u0135\u0136\u0007T\u0002\u0002",
    "\u0136<\u0003\u0002\u0002\u0002\u0137\u0138\u0007K\u0002\u0002\u0138",
    "\u0139\u0007P\u0002\u0002\u0139\u013a\u0007Z\u0002\u0002\u013a>\u0003",
    "\u0002\u0002\u0002\u013b\u013c\u0007L\u0002\u0002\u013c\u013d\u0007",
    "E\u0002\u0002\u013d@\u0003\u0002\u0002\u0002\u013e\u013f\u0007L\u0002",
    "\u0002\u013f\u0140\u0007O\u0002\u0002\u0140B\u0003\u0002\u0002\u0002",
    "\u0141\u0142\u0007L\u0002\u0002\u0142\u0143\u0007O\u0002\u0002\u0143",
    "\u0144\u0007R\u0002\u0002\u0144D\u0003\u0002\u0002\u0002\u0145\u0146",
    "\u0007L\u0002\u0002\u0146\u0147\u0007P\u0002\u0002\u0147\u0148\u0007",
    "E\u0002\u0002\u0148F\u0003\u0002\u0002\u0002\u0149\u014a\u0007L\u0002",
    "\u0002\u014a\u014b\u0007P\u0002\u0002\u014b\u014c\u0007\\\u0002\u0002",
    "\u014cH\u0003\u0002\u0002\u0002\u014d\u014e\u0007L\u0002\u0002\u014e",
    "\u014f\u0007R\u0002\u0002\u014fJ\u0003\u0002\u0002\u0002\u0150\u0151",
    "\u0007L\u0002\u0002\u0151\u0152\u0007R\u0002\u0002\u0152\u0153\u0007",
    "G\u0002\u0002\u0153L\u0003\u0002\u0002\u0002\u0154\u0155\u0007L\u0002",
    "\u0002\u0155\u0156\u0007R\u0002\u0002\u0156\u0157\u0007Q\u0002\u0002",
    "\u0157N\u0003\u0002\u0002\u0002\u0158\u0159\u0007L\u0002\u0002\u0159",
    "\u015a\u0007\\\u0002\u0002\u015aP\u0003\u0002\u0002\u0002\u015b\u015c",
    "\u0007N\u0002\u0002\u015c\u015d\u0007F\u0002\u0002\u015d\u015e\u0007",
    "C\u0002\u0002\u015eR\u0003\u0002\u0002\u0002\u015f\u0160\u0007N\u0002",
    "\u0002\u0160\u0161\u0007F\u0002\u0002\u0161\u0162\u0007C\u0002\u0002",
    "\u0162\u0163\u0007Z\u0002\u0002\u0163T\u0003\u0002\u0002\u0002\u0164",
    "\u0165\u0007N\u0002\u0002\u0165\u0166\u0007J\u0002\u0002\u0166\u0167",
    "\u0007N\u0002\u0002\u0167\u0168\u0007F\u0002\u0002\u0168V\u0003\u0002",
    "\u0002\u0002\u0169\u016a\u0007N\u0002\u0002\u016a\u016b\u0007Z\u0002",
    "\u0002\u016b\u016c\u0007K\u0002\u0002\u016cX\u0003\u0002\u0002\u0002",
    "\u016d\u016e\u0007.\u0002\u0002\u016eZ\u0003\u0002\u0002\u0002\u016f",
    "\u0170\u0007O\u0002\u0002\u0170\u0171\u0007Q\u0002\u0002\u0171\u0172",
    "\u0007X\u0002\u0002\u0172\\\u0003\u0002\u0002\u0002\u0173\u0174\u0007",
    "O\u0002\u0002\u0174\u0175\u0007X\u0002\u0002\u0175\u0176\u0007K\u0002",
    "\u0002\u0176^\u0003\u0002\u0002\u0002\u0177\u0178\u0007P\u0002\u0002",
    "\u0178\u0179\u0007Q\u0002\u0002\u0179\u017a\u0007R\u0002\u0002\u017a",
    "`\u0003\u0002\u0002\u0002\u017b\u017c\u0007Q\u0002\u0002\u017c\u017d",
    "\u0007T\u0002\u0002\u017d\u017e\u0007C\u0002\u0002\u017eb\u0003\u0002",
    "\u0002\u0002\u017f\u0180\u0007Q\u0002\u0002\u0180\u0181\u0007W\u0002",
    "\u0002\u0181\u0182\u0007V\u0002\u0002\u0182d\u0003\u0002\u0002\u0002",
    "\u0183\u0184\u0007R\u0002\u0002\u0184\u0185\u0007E\u0002\u0002\u0185",
    "\u0186\u0007J\u0002\u0002\u0186\u0187\u0007N\u0002\u0002\u0187f\u0003",
    "\u0002\u0002\u0002\u0188\u0189\u0007R\u0002\u0002\u0189\u018a\u0007",
    "Q\u0002\u0002\u018a\u018b\u0007R\u0002\u0002\u018bh\u0003\u0002\u0002",
    "\u0002\u018c\u018d\u0007R\u0002\u0002\u018d\u018e\u0007W\u0002\u0002",
    "\u018e\u018f\u0007U\u0002\u0002\u018f\u0190\u0007J\u0002\u0002\u0190",
    "j\u0003\u0002\u0002\u0002\u0191\u0192\u0007T\u0002\u0002\u0192\u0193",
    "\u0007C\u0002\u0002\u0193\u0194\u0007N\u0002\u0002\u0194l\u0003\u0002",
    "\u0002\u0002\u0195\u0196\u0007T\u0002\u0002\u0196\u0197\u0007C\u0002",
    "\u0002\u0197\u0198\u0007T\u0002\u0002\u0198n\u0003\u0002\u0002\u0002",
    "\u0199\u019a\u0007T\u0002\u0002\u019a\u019b\u0007E\u0002\u0002\u019b",
    "p\u0003\u0002\u0002\u0002\u019c\u019d\u0007T\u0002\u0002\u019d\u019e",
    "\u0007G\u0002\u0002\u019e\u019f\u0007V\u0002\u0002\u019fr\u0003\u0002",
    "\u0002\u0002\u01a0\u01a1\u0007T\u0002\u0002\u01a1\u01a2\u0007K\u0002",
    "\u0002\u01a2\u01a3\u0007O\u0002\u0002\u01a3t\u0003\u0002\u0002\u0002",
    "\u01a4\u01a5\u0007T\u0002\u0002\u01a5\u01a6\u0007N\u0002\u0002\u01a6",
    "\u01a7\u0007E\u0002\u0002\u01a7v\u0003\u0002\u0002\u0002\u01a8\u01a9",
    "\u0007T\u0002\u0002\u01a9\u01aa\u0007O\u0002\u0002\u01aax\u0003\u0002",
    "\u0002\u0002\u01ab\u01ac\u0007T\u0002\u0002\u01ac\u01ad\u0007P\u0002",
    "\u0002\u01ad\u01ae\u0007E\u0002\u0002\u01aez\u0003\u0002\u0002\u0002",
    "\u01af\u01b0\u0007T\u0002\u0002\u01b0\u01b1\u0007P\u0002\u0002\u01b1",
    "\u01b2\u0007\\\u0002\u0002\u01b2|\u0003\u0002\u0002\u0002\u01b3\u01b4",
    "\u0007T\u0002\u0002\u01b4\u01b5\u0007R\u0002\u0002\u01b5~\u0003\u0002",
    "\u0002\u0002\u01b6\u01b7\u0007T\u0002\u0002\u01b7\u01b8\u0007R\u0002",
    "\u0002\u01b8\u01b9\u0007G\u0002\u0002\u01b9\u0080\u0003\u0002\u0002",
    "\u0002\u01ba\u01bb\u0007T\u0002\u0002\u01bb\u01bc\u0007R\u0002\u0002",
    "\u01bc\u01bd\u0007Q\u0002\u0002\u01bd\u0082\u0003\u0002\u0002\u0002",
    "\u01be\u01bf\u0007T\u0002\u0002\u01bf\u01c0\u0007T\u0002\u0002\u01c0",
    "\u01c1\u0007E\u0002\u0002\u01c1\u0084\u0003\u0002\u0002\u0002\u01c2",
    "\u01c3\u0007T\u0002\u0002\u01c3\u01c4\u0007\\\u0002\u0002\u01c4\u0086",
    "\u0003\u0002\u0002\u0002\u01c5\u01c6\u0007U\u0002\u0002\u01c6\u01c7",
    "\u0007D\u0002\u0002\u01c7\u01c8\u0007D\u0002\u0002\u01c8\u0088\u0003",
    "\u0002\u0002\u0002\u01c9\u01ca\u0007U\u0002\u0002\u01ca\u01cb\u0007",
    "D\u0002\u0002\u01cb\u01cc\u0007K\u0002\u0002\u01cc\u008a\u0003\u0002",
    "\u0002\u0002\u01cd\u01ce\u0007U\u0002\u0002\u01ce\u01cf\u0007J\u0002",
    "\u0002\u01cf\u01d0\u0007N\u0002\u0002\u01d0\u01d1\u0007F\u0002\u0002",
    "\u01d1\u008c\u0003\u0002\u0002\u0002\u01d2\u01d3\u0007U\u0002\u0002",
    "\u01d3\u01d4\u0007K\u0002\u0002\u01d4\u01d5\u0007O\u0002\u0002\u01d5",
    "\u008e\u0003\u0002\u0002\u0002\u01d6\u01d7\u0007U\u0002\u0002\u01d7",
    "\u01d8\u0007R\u0002\u0002\u01d8\u01d9\u0007J\u0002\u0002\u01d9\u01da",
    "\u0007N\u0002\u0002\u01da\u0090\u0003\u0002\u0002\u0002\u01db\u01dc",
    "\u0007U\u0002\u0002\u01dc\u01dd\u0007V\u0002\u0002\u01dd\u01de\u0007",
    "C\u0002\u0002\u01de\u0092\u0003\u0002\u0002\u0002\u01df\u01e0\u0007",
    "U\u0002\u0002\u01e0\u01e1\u0007V\u0002\u0002\u01e1\u01e2\u0007C\u0002",
    "\u0002\u01e2\u01e3\u0007Z\u0002\u0002\u01e3\u0094\u0003\u0002\u0002",
    "\u0002\u01e4\u01e5\u0007U\u0002\u0002\u01e5\u01e6\u0007W\u0002\u0002",
    "\u01e6\u01e7\u0007D\u0002\u0002\u01e7\u0096\u0003\u0002\u0002\u0002",
    "\u01e8\u01e9\u0007U\u0002\u0002\u01e9\u01ea\u0007W\u0002\u0002\u01ea",
    "\u01eb\u0007K\u0002\u0002\u01eb\u0098\u0003\u0002\u0002\u0002\u01ec",
    "\u01ed\u0007Z\u0002\u0002\u01ed\u01ee\u0007E\u0002\u0002\u01ee\u01ef",
    "\u0007J\u0002\u0002\u01ef\u01f0\u0007I\u0002\u0002\u01f0\u009a\u0003",
    "\u0002\u0002\u0002\u01f1\u01f2\u0007Z\u0002\u0002\u01f2\u01f3\u0007",
    "T\u0002\u0002\u01f3\u01f4\u0007C\u0002\u0002\u01f4\u009c\u0003\u0002",
    "\u0002\u0002\u01f5\u01f6\u0007Z\u0002\u0002\u01f6\u01f7\u0007T\u0002",
    "\u0002\u01f7\u01f8\u0007K\u0002\u0002\u01f8\u009e\u0003\u0002\u0002",
    "\u0002\u01f9\u01fa\u0007Z\u0002\u0002\u01fa\u01fb\u0007V\u0002\u0002",
    "\u01fb\u01fc\u0007J\u0002\u0002\u01fc\u01fd\u0007N\u0002\u0002\u01fd",
    "\u00a0\u0003\u0002\u0002\u0002\u01fe\u01ff\u0007F\u0002\u0002\u01ff",
    "\u0200\u0007D\u0002\u0002\u0200\u00a2\u0003\u0002\u0002\u0002\u0201",
    "\u0202\u0007F\u0002\u0002\u0202\u0203\u0007U\u0002\u0002\u0203\u00a4",
    "\u0003\u0002\u0002\u0002\u0204\u0205\u0007U\u0002\u0002\u0205\u0206",
    "\u0007G\u0002\u0002\u0206\u0207\u0007V\u0002\u0002\u0207\u00a6\u0003",
    "\u0002\u0002\u0002\u0208\u0209\u0007&\u0002\u0002\u0209\u00a8\u0003",
    "\u0002\u0002\u0002\u020a\u020b\u0007-\u0002\u0002\u020b\u00aa\u0003",
    "\u0002\u0002\u0002\u020c\u020d\u0007/\u0002\u0002\u020d\u00ac\u0003",
    "\u0002\u0002\u0002\u020e\u020f\u0007,\u0002\u0002\u020f\u00ae\u0003",
    "\u0002\u0002\u0002\u0210\u0211\u00071\u0002\u0002\u0211\u00b0\u0003",
    "\u0002\u0002\u0002\u0212\u0213\u0007O\u0002\u0002\u0213\u0214\u0007",
    "Q\u0002\u0002\u0214\u0215\u0007F\u0002\u0002\u0215\u00b2\u0003\u0002",
    "\u0002\u0002\u0216\u0217\u0007*\u0002\u0002\u0217\u00b4\u0003\u0002",
    "\u0002\u0002\u0218\u0219\u0007+\u0002\u0002\u0219\u00b6\u0003\u0002",
    "\u0002\u0002\u021a\u0221\t\u0002\u0002\u0002\u021b\u021c\u0007U\u0002",
    "\u0002\u021c\u0221\u0007R\u0002\u0002\u021d\u021e\u0007R\u0002\u0002",
    "\u021e\u021f\u0007U\u0002\u0002\u021f\u0221\u0007Y\u0002\u0002\u0220",
    "\u021a\u0003\u0002\u0002\u0002\u0220\u021b\u0003\u0002\u0002\u0002\u0220",
    "\u021d\u0003\u0002\u0002\u0002\u0221\u00b8\u0003\u0002\u0002\u0002\u0222",
    "\u0224\t\u0003\u0002\u0002\u0223\u0222\u0003\u0002\u0002\u0002\u0224",
    "\u0225\u0003\u0002\u0002\u0002\u0225\u0223\u0003\u0002\u0002\u0002\u0225",
    "\u0226\u0003\u0002\u0002\u0002\u0226\u0227\u0003\u0002\u0002\u0002\u0227",
    "\u0228\u0007J\u0002\u0002\u0228\u00ba\u0003\u0002\u0002\u0002\u0229",
    "\u022b\t\u0004\u0002\u0002\u022a\u0229\u0003\u0002\u0002\u0002\u022b",
    "\u022c\u0003\u0002\u0002\u0002\u022c\u022a\u0003\u0002\u0002\u0002\u022c",
    "\u022d\u0003\u0002\u0002\u0002\u022d\u022e\u0003\u0002\u0002\u0002\u022e",
    "\u022f\u0007S\u0002\u0002\u022f\u00bc\u0003\u0002\u0002\u0002\u0230",
    "\u0232\t\u0005\u0002\u0002\u0231\u0230\u0003\u0002\u0002\u0002\u0232",
    "\u0233\u0003\u0002\u0002\u0002\u0233\u0231\u0003\u0002\u0002\u0002\u0233",
    "\u0234\u0003\u0002\u0002\u0002\u0234\u0235\u0003\u0002\u0002\u0002\u0235",
    "\u0236\u0007D\u0002\u0002\u0236\u00be\u0003\u0002\u0002\u0002\u0237",
    "\u0239\t\u0006\u0002\u0002\u0238\u0237\u0003\u0002\u0002\u0002\u0239",
    "\u023a\u0003\u0002\u0002\u0002\u023a\u0238\u0003\u0002\u0002\u0002\u023a",
    "\u023b\u0003\u0002\u0002\u0002\u023b\u023c\u0003\u0002\u0002\u0002\u023c",
    "\u0243\u0007F\u0002\u0002\u023d\u023f\t\u0006\u0002\u0002\u023e\u023d",
    "\u0003\u0002\u0002\u0002\u023f\u0240\u0003\u0002\u0002\u0002\u0240\u023e",
    "\u0003\u0002\u0002\u0002\u0240\u0241\u0003\u0002\u0002\u0002\u0241\u0243",
    "\u0003\u0002\u0002\u0002\u0242\u0238\u0003\u0002\u0002\u0002\u0242\u023e",
    "\u0003\u0002\u0002\u0002\u0243\u00c0\u0003\u0002\u0002\u0002\u0244\u0248",
    "\u0007)\u0002\u0002\u0245\u0247\n\u0007\u0002\u0002\u0246\u0245\u0003",
    "\u0002\u0002\u0002\u0247\u024a\u0003\u0002\u0002\u0002\u0248\u0246\u0003",
    "\u0002\u0002\u0002\u0248\u0249\u0003\u0002\u0002\u0002\u0249\u024b\u0003",
    "\u0002\u0002\u0002\u024a\u0248\u0003\u0002\u0002\u0002\u024b\u024c\u0007",
    ")\u0002\u0002\u024c\u00c2\u0003\u0002\u0002\u0002\u024d\u024f\u0007",
    "\u000f\u0002\u0002\u024e\u024d\u0003\u0002\u0002\u0002\u024e\u024f\u0003",
    "\u0002\u0002\u0002\u024f\u0250\u0003\u0002\u0002\u0002\u0250\u0251\u0007",
    "\f\u0002\u0002\u0251\u00c4\u0003\u0002\u0002\u0002\u0252\u0256\t\b\u0002",
    "\u0002\u0253\u0255\t\t\u0002\u0002\u0254\u0253\u0003\u0002\u0002\u0002",
    "\u0255\u0258\u0003\u0002\u0002\u0002\u0256\u0254\u0003\u0002\u0002\u0002",
    "\u0256\u0257\u0003\u0002\u0002\u0002\u0257\u00c6\u0003\u0002\u0002\u0002",
    "\u0258\u0256\u0003\u0002\u0002\u0002\u0259\u025d\u0007=\u0002\u0002",
    "\u025a\u025c\n\n\u0002\u0002\u025b\u025a\u0003\u0002\u0002\u0002\u025c",
    "\u025f\u0003\u0002\u0002\u0002\u025d\u025b\u0003\u0002\u0002\u0002\u025d",
    "\u025e\u0003\u0002\u0002\u0002\u025e\u0260\u0003\u0002\u0002\u0002\u025f",
    "\u025d\u0003\u0002\u0002\u0002\u0260\u0261\bd\u0002\u0002\u0261\u00c8",
    "\u0003\u0002\u0002\u0002\u0262\u0263\t\u000b\u0002\u0002\u0263\u0264",
    "\u0003\u0002\u0002\u0002\u0264\u0265\be\u0002\u0002\u0265\u00ca\u0003",
    "\u0002\u0002\u0002\u000e\u0002\u0220\u0225\u022c\u0233\u023a\u0240\u0242",
    "\u0248\u024e\u0256\u025d\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function asm8085Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

asm8085Lexer.prototype = Object.create(antlr4.Lexer.prototype);
asm8085Lexer.prototype.constructor = asm8085Lexer;

asm8085Lexer.EOF = antlr4.Token.EOF;
asm8085Lexer.T__0 = 1;
asm8085Lexer.T__1 = 2;
asm8085Lexer.T__2 = 3;
asm8085Lexer.T__3 = 4;
asm8085Lexer.T__4 = 5;
asm8085Lexer.T__5 = 6;
asm8085Lexer.T__6 = 7;
asm8085Lexer.T__7 = 8;
asm8085Lexer.T__8 = 9;
asm8085Lexer.T__9 = 10;
asm8085Lexer.T__10 = 11;
asm8085Lexer.T__11 = 12;
asm8085Lexer.T__12 = 13;
asm8085Lexer.T__13 = 14;
asm8085Lexer.T__14 = 15;
asm8085Lexer.T__15 = 16;
asm8085Lexer.T__16 = 17;
asm8085Lexer.T__17 = 18;
asm8085Lexer.T__18 = 19;
asm8085Lexer.T__19 = 20;
asm8085Lexer.T__20 = 21;
asm8085Lexer.T__21 = 22;
asm8085Lexer.T__22 = 23;
asm8085Lexer.T__23 = 24;
asm8085Lexer.T__24 = 25;
asm8085Lexer.T__25 = 26;
asm8085Lexer.T__26 = 27;
asm8085Lexer.T__27 = 28;
asm8085Lexer.T__28 = 29;
asm8085Lexer.T__29 = 30;
asm8085Lexer.T__30 = 31;
asm8085Lexer.T__31 = 32;
asm8085Lexer.T__32 = 33;
asm8085Lexer.T__33 = 34;
asm8085Lexer.T__34 = 35;
asm8085Lexer.T__35 = 36;
asm8085Lexer.T__36 = 37;
asm8085Lexer.T__37 = 38;
asm8085Lexer.T__38 = 39;
asm8085Lexer.T__39 = 40;
asm8085Lexer.T__40 = 41;
asm8085Lexer.T__41 = 42;
asm8085Lexer.T__42 = 43;
asm8085Lexer.T__43 = 44;
asm8085Lexer.T__44 = 45;
asm8085Lexer.T__45 = 46;
asm8085Lexer.T__46 = 47;
asm8085Lexer.T__47 = 48;
asm8085Lexer.T__48 = 49;
asm8085Lexer.T__49 = 50;
asm8085Lexer.T__50 = 51;
asm8085Lexer.T__51 = 52;
asm8085Lexer.T__52 = 53;
asm8085Lexer.T__53 = 54;
asm8085Lexer.T__54 = 55;
asm8085Lexer.T__55 = 56;
asm8085Lexer.T__56 = 57;
asm8085Lexer.T__57 = 58;
asm8085Lexer.T__58 = 59;
asm8085Lexer.T__59 = 60;
asm8085Lexer.T__60 = 61;
asm8085Lexer.T__61 = 62;
asm8085Lexer.T__62 = 63;
asm8085Lexer.T__63 = 64;
asm8085Lexer.T__64 = 65;
asm8085Lexer.T__65 = 66;
asm8085Lexer.T__66 = 67;
asm8085Lexer.T__67 = 68;
asm8085Lexer.T__68 = 69;
asm8085Lexer.T__69 = 70;
asm8085Lexer.T__70 = 71;
asm8085Lexer.T__71 = 72;
asm8085Lexer.T__72 = 73;
asm8085Lexer.T__73 = 74;
asm8085Lexer.T__74 = 75;
asm8085Lexer.T__75 = 76;
asm8085Lexer.T__76 = 77;
asm8085Lexer.T__77 = 78;
asm8085Lexer.T__78 = 79;
asm8085Lexer.T__79 = 80;
asm8085Lexer.T__80 = 81;
asm8085Lexer.T__81 = 82;
asm8085Lexer.T__82 = 83;
asm8085Lexer.T__83 = 84;
asm8085Lexer.T__84 = 85;
asm8085Lexer.T__85 = 86;
asm8085Lexer.T__86 = 87;
asm8085Lexer.T__87 = 88;
asm8085Lexer.T__88 = 89;
asm8085Lexer.T__89 = 90;
asm8085Lexer.REGISTER = 91;
asm8085Lexer.HEX = 92;
asm8085Lexer.OCT = 93;
asm8085Lexer.BIN = 94;
asm8085Lexer.DEC = 95;
asm8085Lexer.STR = 96;
asm8085Lexer.EOL = 97;
asm8085Lexer.LABEL = 98;
asm8085Lexer.COMMENT = 99;
asm8085Lexer.WS = 100;


asm8085Lexer.modeNames = [ "DEFAULT_MODE" ];

asm8085Lexer.literalNames = [ null, "':'", "'ACI'", "'ADC'", "'ADD'", "'ADI'", 
                              "'ANA'", "'ANI'", "'CALL'", "'CC'", "'CM'", 
                              "'CMA'", "'CMC'", "'CMP'", "'CNC'", "'CNZ'", 
                              "'CP'", "'CPE'", "'CPI'", "'CPO'", "'CZ'", 
                              "'DAA'", "'DAD'", "'DCR'", "'DCX'", "'DI'", 
                              "'EI'", "'HLT'", "'IN'", "'INR'", "'INX'", 
                              "'JC'", "'JM'", "'JMP'", "'JNC'", "'JNZ'", 
                              "'JP'", "'JPE'", "'JPO'", "'JZ'", "'LDA'", 
                              "'LDAX'", "'LHLD'", "'LXI'", "','", "'MOV'", 
                              "'MVI'", "'NOP'", "'ORA'", "'OUT'", "'PCHL'", 
                              "'POP'", "'PUSH'", "'RAL'", "'RAR'", "'RC'", 
                              "'RET'", "'RIM'", "'RLC'", "'RM'", "'RNC'", 
                              "'RNZ'", "'RP'", "'RPE'", "'RPO'", "'RRC'", 
                              "'RZ'", "'SBB'", "'SBI'", "'SHLD'", "'SIM'", 
                              "'SPHL'", "'STA'", "'STAX'", "'SUB'", "'SUI'", 
                              "'XCHG'", "'XRA'", "'XRI'", "'XTHL'", "'DB'", 
                              "'DS'", "'SET'", "'$'", "'+'", "'-'", "'*'", 
                              "'/'", "'MOD'", "'('", "')'" ];

asm8085Lexer.symbolicNames = [ null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               null, null, null, null, null, null, null, 
                               "REGISTER", "HEX", "OCT", "BIN", "DEC", "STR", 
                               "EOL", "LABEL", "COMMENT", "WS" ];

asm8085Lexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", 
                           "T__6", "T__7", "T__8", "T__9", "T__10", "T__11", 
                           "T__12", "T__13", "T__14", "T__15", "T__16", 
                           "T__17", "T__18", "T__19", "T__20", "T__21", 
                           "T__22", "T__23", "T__24", "T__25", "T__26", 
                           "T__27", "T__28", "T__29", "T__30", "T__31", 
                           "T__32", "T__33", "T__34", "T__35", "T__36", 
                           "T__37", "T__38", "T__39", "T__40", "T__41", 
                           "T__42", "T__43", "T__44", "T__45", "T__46", 
                           "T__47", "T__48", "T__49", "T__50", "T__51", 
                           "T__52", "T__53", "T__54", "T__55", "T__56", 
                           "T__57", "T__58", "T__59", "T__60", "T__61", 
                           "T__62", "T__63", "T__64", "T__65", "T__66", 
                           "T__67", "T__68", "T__69", "T__70", "T__71", 
                           "T__72", "T__73", "T__74", "T__75", "T__76", 
                           "T__77", "T__78", "T__79", "T__80", "T__81", 
                           "T__82", "T__83", "T__84", "T__85", "T__86", 
                           "T__87", "T__88", "T__89", "REGISTER", "HEX", 
                           "OCT", "BIN", "DEC", "STR", "EOL", "LABEL", "COMMENT", 
                           "WS" ];

asm8085Lexer.grammarFileName = "asm8085.g4";



exports.asm8085Lexer = asm8085Lexer;

