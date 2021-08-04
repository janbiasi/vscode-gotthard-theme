package com.microsoft.fixture.vscode.theme;

import com.spring.asdf;

/**
 * Basic JavaDoc stuffz
 * 
 * @author Jan Biasi
 * @version 1.0
 */
@Slf4j
@RestController
class JavaController {
    
    // This is a comment

    @GetMapping("/test")
    public String getTest() {
        return "Hello World!";
    }

    private void streamsSyntax() throws Exception {
        Stream.of("d2", "a2", "b1", "b3", "c")
            .filter(str -> {
                System.out.println("filter: " + str);
                return true;
            })
            .forEach(str -> System.out.println("forEach: " + str));
    }

    /**
     * JavaDoc example
     * @param input Simple string input
     */
    private String returnTheSame(String input) {
        return input;
    }
}