/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var com;
(function (com) {
    var plantuml2;
    (function (plantuml2) {
        class Demo {
            static add(a, b) {
                return a + b;
            }
            static areLetters1(s) {
                const pattern = java.util.regex.Pattern.compile("^([a-z]*)$");
                const m = pattern.matcher(s);
                return m.find();
            }
            static areLetters2(s) {
                const r = new RegExp("^([a-z]*)$");
                return r.test(s);
            }
        }
        plantuml2.Demo = Demo;
        Demo["__class"] = "com.plantuml2.Demo";
    })(plantuml2 = com.plantuml2 || (com.plantuml2 = {}));
})(com || (com = {}));
