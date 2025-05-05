// jobs-status.component.ts
import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Job {
  name: string;
  id: string;
  timestamp: number;
  returnvalue: {
    status: number;
    message: string;
  };
  data: any;
  opts: any;
  progress: number;
  stacktrace: string[];
  attemptsMade: number;
  processedOn: number;
  finishedOn: number;
}

@Component({
  selector: 'app-jobs-status',
  templateUrl: './jobs-status.component.html',
  styleUrls: ['./jobs-status.component.scss'],
  providers: [DatePipe]
})
export class JobsStatusComponent {
  otherColumns: string[] = [];
  jobs: Job[] = [
    {
      "name": "NotifyJob",
      "id": "404",
      "timestamp": 1745924803822,
      "returnvalue": {
        "status": 200,
        "message": "Success"
      },
      "data": {
        "name": "NotifyJob",
        "activityDetails": {
          "org_id": "625d060886a69d001b5c7f3d",
          "object_type_details": {
            "object_type_id": "66225d9eda8ba4eee4f5ffeb",
            "object_type": "NOTE"
          },
          "activity_type": "COLLAB",
          "updates": [
            {
              "field_key": "",
              "field_type": "",
              "previous_value": {},
              "new_value": {}
            }
          ],
          "action_details": {
            "user_id": "65fe7805f1c6780025071735",
            "user_name": "Ayush Agarwal - 1"
          },
          "additional_attributes": {
            "dashboard_id": "",
            "dashboard_name": "",
            "org_name": "Prachi Org Updated",
            "updated_item": {},
            "updated_keys": [],
            "note_details": {
              "item_id": [],
              "dashboard_id": [],
              "user_id": [
                "65fe7805f1c6780025071735",
                "65e6f404ed50a8002566629d"
              ],
              "history_note_id": null,
              "is_deleted": false,
              "note_key": null,
              "_id": "66225d9eda8ba4eee4f5ffeb",
              "organization_id": "625d060886a69d001b5c7f3d",
              "title": "New Note",
              "created_by": "65fe7805f1c6780025071735",
              "last_update_by": "65fe7805f1c6780025071735",
              "create_date": 1713528222401,
              "last_update": 1745924803108,
              "__v": 2,
              "note_text": "[]"
            }
          },
          "updated_item_ids": [],
          "users_to_notify": [
            "65e6f404ed50a8002566629d"
          ]
        }
      },
      "opts": {
        "attempts": 0,
        "delay": 0,
        "removeOnFail": {
          "age": 604800
        },
        "removeOnComplete": {
          "age": 86400
        }
      },
      "progress": 0,
      "stacktrace": [],
      "attemptsMade": 1,
      "processedOn": 1745924803825,
      "finishedOn": 1745924803829
    },
    {
      "name": "LiveUpdateJobForDashboards",
      "id": "403",
      "timestamp": 1745924676347,
      "returnvalue": {
        "status": 200,
        "message": "Success"
      },
      "data": {
        "name": "LiveUpdateJobForDashboards",
        "activityDetails": {
          "org_id": "625d060886a69d001b5c7f3d",
          "object_type": "DASHBOARD_USER",
          "object_type_details": {
            "object_type_id": "6810b167d28b33cf7883a482",
            "object_type": "DASHBOARD_USER"
          },
          "activity_type": "UPDATE",
          "action_details": {
            "user_id": "65e6f404ed50a8002566629d",
            "action_time": 1745924676346
          },
          "additional_attributes": {
            "dashboard_id": "6810b167d28b33cf7883a482",
            "updated_keys": [],
            "updates": [],
            "details": [
              {
                "_id": "65e6f404ed50a8002566629d",
                "name": "Ayush",
                "email": "ayusha@athmin.com",
                "is_deleted": false,
                "role": [
                  "DASHBOARD_ADMIN"
                ]
              },
              {
                "_id": "65fe7805f1c6780025071735",
                "name": "Ayush Agarwal - 1",
                "email": "ayusha+1@athmin.com",
                "is_deleted": false,
                "role": [
                  "ACCESS"
                ]
              }
            ]
          },
          "action_performed_on_userId": [
            "65fe7805f1c6780025071735"
          ]
        },
        "isCancellable": false
      },
      "opts": {
        "attempts": 0,
        "delay": 0,
        "removeOnFail": {
          "age": 604800
        },
        "removeOnComplete": {
          "age": 86400
        }
      },
      "progress": 0,
      "stacktrace": [],
      "attemptsMade": 1,
      "processedOn": 1745924676347,
      "finishedOn": 1745924676351
    }
  ];
  displayedColumns: string[] = ['name', 'id', 'status', 'timestamp', 'attempts'];
  expandedElement: Job | null = null;

  constructor(private datePipe: DatePipe) {}

  formatTimestamp(timestamp: number): string {
    return this.datePipe.transform(timestamp, 'medium') || '';
  }

  getStatusClass(status: number): string {
    return status === 200 ? 'success' : 'failure';
  }

  isOtherRow = (index: number, row: any) => {
    return row.type === 'other';
  };
  
}