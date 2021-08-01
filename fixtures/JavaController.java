package com.microsoft.fixture.vscode.theme;

import com.spring.asdf;

@Slf4j
@RestController
class JavaController {
    
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
}