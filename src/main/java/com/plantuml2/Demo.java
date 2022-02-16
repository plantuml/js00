package com.plantuml2;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import def.js.RegExp;

public class Demo {

	public static int add(int a, int b) {
		return a + b;
	}

	public static boolean areLetters1(String s) {
		Pattern pattern = Pattern.compile("^([a-z]*)$");
		final Matcher m = pattern.matcher(s);
		return m.find();

	}

	public static boolean areLetters2(String s) {
		final RegExp r = new RegExp("^([a-z]*)$");
		return r.test(s);

	}

}
