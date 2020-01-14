import {Course} from './course';
import { ɵLifecycleHooksFeature } from '@angular/core';
export const COURSES: Course[]=[
    {
        id: 1,
        name: 'WDAI',
        ects: 3,
        number_of_students:120,
        semester:3,
        free_places: 10,
        course_type: 'PROJECT',
        rate: 4.6,
        number_of_rates: 17    ,
        description: "Celem przedmiotu jest wprowadzenie do języków frontendowych. CSS, PHP, JavaScript, Angular."
    },
    {
        id: 2,
        name:'IWIJ',
        ects: 3,
        number_of_students:150,
        semester: 3,
        free_places: 45,
        course_type: 'LECTURE',
        rate: 4.1,
        number_of_rates: 8,
        description: "Systemy informacyjne i informatyczne. Cykl tworzenia systemu informatycznego. Analiza systemowa: opis dziedziny problemu, obszaru modelowania. Analiza potrzeb użytkowników, wymagania projektowe. Rola analityka systemowego i projektanta. Koncepcyjne i techniczne projektowanie systemu, zasady metodyczne. Rezultaty analizy i projektowania i ich dokumentowanie. Realizacja projektu, specyfikacje projektowe, projektowanie interfejsu. Implementacja i testowanie. Wdrożenie i eksploatacja systemu. Komputerowe wspomaganie prac. Ważniejsze obszary zastosowań systemów informatycznych."
    },
    {
        id: 3,
        name:'ANALIZA',
        ects: 6,
        number_of_students:200,
        semester: 1,
        free_places: 60,
        course_type: 'LECTURE',
        rate: 3.8,
        number_of_rates: 15 ,
        description: "Granica ciągów, rachunek różniczkowy i całkowy funkcji 1 zmiennej, przestrzenie metryczne."
    },
    {
        id: 4,
        name: 'PI',
        ects:4,
        number_of_students:95,
        semester:2,
        free_places:0,
        course_type:'LABORATORY',
        rate: 4.0,
        number_of_rates: 6 ,
        description: "Wprowadzenie do programowania imperatywnego. Przesłanki konstrukcji i stosowania języków programowania. Język C (również jako wstęp do C++ i Java). Jednostki leksykalne, składnia. Przetwarzanie kodu źródłowego: narzędzia, platformy, biblioteki. Atrybuty danych i typizacja w językach imperatywnych. Deklaracje i definicje w przedmiotowych językach: typy danych, zakres obowiązywania deklaracji, składowanie (technika referencyjna, modularyzacja programu za pomocą funkcji). Operatory i wyrażenia: właściwości, realizacja (konwersje niejawne, obliczanie funkcji, przeciążanie, rekursja). Programowanie strukturalne. Instrukcje w przedmiotowych językach: rodzaje, właściwości. Wprowadzenie do języka C++: ewolucja języka, elementarne różnice w stosunku do C (deklaracje, operatory). Elementy programowania obiektowego"  
    },
    {
        id: 5,
        name:'TOIZO',
        ects:5,
        number_of_students:150,
        semester:4,
        free_places:45,
        course_type:'EXCERCISES',
        rate: 3.4,
        number_of_rates: 5,
        description: ""
    },
    {
        id: 6,
        name:'MOWNIT',
        ects:6,
        number_of_students:250,
        semester:4,
        free_places:120,
        course_type:'LECTURE',
        rate: 3.1,
        number_of_rates: 10,
        description: ""
    },
    {
        id: 7,
        name:'RURKI',
        ects:4,
        number_of_students:95,
        semester:3,
        free_places:15,
        course_type:'LABORATORY',
        rate: 3.9,
        number_of_rates: 11,
        description: ""
    },
    {
        id: 8,
        name:'ASD',
        ects:6,
        number_of_students:250,
        semester:2,
        free_places:65,
        course_type:'LECTURE',
        rate: 4.6,
        number_of_rates: 7,
        description: ""
    },
    {
        id: 9,
        name:'ELEKTRONIKA',
        ects:3,
        number_of_students:140,
        semester:2,
        free_places:75,
        course_type:'LABORATORY',
        rate: 2.6,
        number_of_rates: 8,
        description: ""
    },
    {
        id: 10,
        name: 'DYSKRETNA',
        ects: 3,
        number_of_students: 95,
        semester: 1,
        free_places: 20,
        course_type: 'EXCERCISES',
        rate: 4.1,
        number_of_rates: 5,
        description: ""
    }
];