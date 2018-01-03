import { Component, trigger, state, style } from '@angular/core';

@Component ({
    selector: 'app-board',
    templateUrl: './app-board.component.html',
    animations: [
        trigger('expandPanel', [
            state('contract', style({
                width: '250px'
            }))
        ])
    ]
})

export class AppBoardComponent {
    componentTitle: string = 'Kanban Board';
    _boardId: string;
    _entityType: string = 'Project'
    // entityLink: object =  {
    //     entityType: 
    //     //entityId: string;
    // }

    /**
     * function creates a new column with hardcoded dataset
     * should instantiate a new column class
     */
    // createColumn(): void {

    // }

    /**
     * function display created column
     */
    // displayColumn(): void {

    // }

    addColumn(): void {
        
    }
    columns: any[] = [
        {
            "columnId": 0,
            "columnName":"Column 1",
            cards: [
                {
                    "cardId": 0,
                    "cardName": "card 20",
                },
                {
                    "cardId": 1,
                    "cardName": "card 21"
                },
                {
                    "cardId":2,
                    "cardName": "card 22"
                },
                {
                    "cardId":3,
                    "cardName": "card 23"
                }
            ]
            
        },
        {
            "columnId": 1,
            "columnName": "Column 2",
            cards: [
                {
                    "cardId": 4,
                    "cardName": "card 24"
                },
                {
                    "cardId": 5,
                    "cardName": "card 25"
                },
                {
                    "cardId":6,
                    "cardName": "card 26"
                },
                {
                    "cardId":7,
                    "cardName": "card 27"
                }
            ]
        },
        {
            "columnId": 2,
            "columnName": "Column 3",
            cards: [
                {
                    "cardId": 20,
                    "cardName": "card 18", 
                },
                {
                    "cardId": 21,
                    "cardName": "card 17",
                },
                {
                    "cardId": 22,
                    "cardName": "card 16",
                },
                {
                    "cardId":23,
                    "cardName": "card 15",
                }
            ]
        },
        {
            "columnId": 3,
            "columnName": "Column 4",
            cards: [
                {
                    "cardId": 4, 
                    "cardName": "card 14",
                },
                {
                    "cardId": 5,
                    "cardName": "card 13",
                },
                {
                    "cardId":6,
                    "cardName": "card 12",
                },
                {
                    "cardId":7,
                    "cardName": "card 11",
                }
            ]
        },
        {
            "columnId": 4,
            "columnName": "Column 5",
            cards: [
                {
                    "cardId": 8, 
                    "cardName": "card 9",
                },
                {
                    "cardId": 9,
                    "cardName": "card 8",
                },
                {
                    "cardId":10,
                    "cardName": "card 7",
                },
                {
                    "cardId":11,
                    "cardName": "card 6"
                }
            ]
        }
    ];

}