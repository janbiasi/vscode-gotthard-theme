package com.microsoft.fixture.vscode.theme;

import com.spring.asdf;

interface BaseController {
    String getTest();
}

abstract class Controller {}

/**!
 * Basic JavaDoc stuffz {@link SomeOtherController}
 * 
 * @author Jan Biasi
 * @version 1.0
 * @see com.spring;
 */
@Slf4j
@RestController("/api/v1")
class JavaController extends Controller implements BaseController {

    private final int code = 1000;

    private List<String> list = new ArrayList<>();
    
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