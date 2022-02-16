# Transpile Java to Javascript

Let's restart PlantUML from the beginning and provide a skeleton that can generate both Java and JavaScript code.

## Goal of this project

- Provide a minimal working example with http://www.jsweet.org/
- Transpile the Java code to JavaScript during the build
- Build this project using maven and github actions.
- Only a simple addition function is provided and a simple regex function
- Provide a simple test to test that `3 + 4 == 7` both in Java and Javascript

## Build the project

You can checkout and run the project this way:

```
git clone https://github.com/plantuml/js00.git
mvn clean generate-sources
```

Then you can open `demo.html` in any browser.
You just should have a popup printing "It works".

This is because this file is doing those tests:

```
<script>
if(com.plantuml2.Demo.add(3, 4)!=7) alert("fail");
if(com.plantuml2.Demo.areLetters2("abc")==false) alert("fail");
if(com.plantuml2.Demo.areLetters2("123")==true) alert("fail");
alert("It works!");
</script>
```

This is really magic, because this is the result of the execution of the following Java source within a browser:


```
	public static int add(int a, int b) {
		return a + b;
	}

	public static boolean areLetters2(String s) {
		final RegExp r = new RegExp("^([a-z]*)$");
		return r.test(s);
	}
```

All kudo go to http://www.jsweet.org 

## TODO

This project must remain very simple.
However, here is what we like to do:
- Use github action to run the build
- Do the Javascript tests during the CI/CD

Your contributions are welcome!
