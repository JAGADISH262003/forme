
import type { CourseModule } from './types';

export const COURSE_DATA: CourseModule[] = [
    {
        id: "intro_c",
        title: "INTRODUCTION TO C LANGUAGE",
        items: ["Features of C", "History", "Structure of C Program", "Keywords, Identifiers, Variables and Constants"]
    },
    {
        id: "data_types",
        title: "DATA TYPES",
        items: ["Primitive Data Types", "Aggregated Data Types"]
    },
    {
        id: "operators",
        title: "OPERATORS",
        items: ["Binary Operators", "Unary Operators", "Ternary Operators", "Special Operators", "Order of evaluation"]
    },
    {
        id: "preprocessor",
        title: "PREPROCESSOR FEATURES",
        items: ["The Control Flow Program Statements", "Looping Statements", "The Data-Checking Process"]
    },
    {
        id: "functions",
        title: "FUNCTIONS",
        items: ["Role of Functions", "Passing arguments to functions", "Returning values from functions", "Recursive Functions", "Callback functions", "Implications on Stack", "Pass by value/reference"]
    },
    {
        id: "arrays",
        title: "ARRAYS",
        items: ["Defining, initializing and using arrays", "Multi Dimensional arrays", "Arrays of Characters and Strings", "Arrays and pointers", "Passing arrays to functions", "String handling and its library functions"]
    },
    {
        id: "storage_classes",
        title: "STORAGE CLASSES",
        items: ["Scope and lifetime of a variable", "Internal", "External/Global", "Automatic", "Static", "Register", "Volatile"]
    },
    {
        id: "structs_unions",
        title: "STRUCTURES & UNIONS",
        items: ["Usage of Structures", "Declaration, initialization and accessing", "Nested Structures", "Array of structures", "Allocation of memory and holes", "Unions"]
    },
    {
        id: "bitwise_ops",
        title: "BITWISE OPERATORS",
        items: ["AND (&), OR (|), XOR (^)", "Compliment (~)", "Left-shift (<<), Right-shift (>>)", "Masking, Setting and Testing of Bit/Bits"]
    },
    {
        id: "pointers",
        title: "POINTERS",
        items: ["The purpose of pointers", "Defining pointers", "The & and * operators", "Pointer assignment", "Pointers with functions", "Pointer to Pointer", "Pointers to Arrays", "Arrays of Pointers", "Void Pointers", "Call By value and Call by reference", "Advanced pointer types", "Pointers to functions", "Pointers and Strings", "Pointers and Dynamic memory"]
    },
    {
        id: "cli_args",
        title: "COMMAND LINE ARGUMENTS",
        items: []
    },
    {
        id: "dyn_mem",
        title: "DYNAMIC MEMORY ALLOCATION",
        items: ["Allocation (Malloc, Calloc, Realloc)", "De-Allocation(Free)"]
    },
    {
        id: "var_args",
        title: "VARIABLE NUMBER OF ARGUMENTS",
        items: ["Implementation of printf()", "Implementation of scanf()"]
    },
    {
        id: "data_structures",
        title: "DATA STRUCTURES",
        items: ["Introduction", "Structured Representation", "Statements and Control Structures", "Abstract Data Types", "Static & Dynamic Data Types", "Arrays & Pointers", "Linked List", "Advanced Data Structures", "Data Structure Representation", "Analysis-Performance analysis of Time and Space", "Design: Algorithm and Flowchart", "Pseudo Code"]
    },
    {
        id: "linked_list",
        title: "LINKED LIST",
        items: ["Introduction", "Advantages of Linked List over an Array", "Operation of Singly Linked Lists", "Operations on Doubly Linked Lists", "Circular Double Linked Lists", "Uses of Linked Lists", "Difference between Arrays and Linked List"]
    },
    {
        id: "sorting_searching",
        title: "SORTING AND SEARCHING TECHNIQUES",
        items: ["Insertion sort", "Selection sort", "Bubble sort", "Merge sort", "Quick sort", "Heap sort", "Linear search", "Binary search"]
    },
    {
        id: "file_handling",
        title: "FILE HANDLING CONCEPTS",
        items: ["Concept of a FILE data type", "File Input, Output operations", "Sequential Files", "Random Access Files"]
    },
    {
        id: "stdio_lib",
        title: "STANDARD I/O LIBRARY FUNCTIONS",
        items: ["fopen,fread,fwrite,fclose,fseek", "Relationship between file descriptor and FILE pointer", "Character at a time i/o", "Line at a time i/o", "Formatted i/o"]
    },
    {
        id: "read_write_structs",
        title: "READING AND WRITING STRUCTURES TO FILES",
        items: ["In Ascii format", "In Binary format", "Modifying a structure in the file"]
    },
    {
        id: "dev_tools",
        title: "DEVELOPMENT TOOLS & UTILITIES",
        items: ["LINUX COMMANDS USEFUL IN DEVELOPMENT", "Vi editor", "GCC compiler", "Four Stages of GCC", "Functionality of Preprocessor", "Functionality of Compiler", "Functionality of Assembler", "Functionality of Linker", "Interrupting the Compiler", "Compiling a C Program", "Preprocessor Features", "Predefined Preprocessor Symbols", "Warnings and Extensions", "Optimization", "GDB debugger", "Archive Utility", "Make Utility", "Object File Format", "Executable File Format"]
    }
];
