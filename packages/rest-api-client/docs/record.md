# Record

- [getRecord](#getRecord)
- [addRecord](#addRecord)
- [updateRecord](#updateRecord)
- [getRecords](#getRecords)
- [addRecords](#addRecords)
- [updateRecords](#updateRecords)
- [deleteRecords](#deleteRecords)
- [getRecordComments](#getRecordComments)
- [addRecordComment](#addRecordComment)
- [deleteRecordComment](#deleteRecordComment)
- [createCursor](#createCursor)
- [getRecordsByCursor](#getRecordsByCursor)
- [deleteCursor](#deleteCursor)
- [updateRecordAssignees](#updateRecordAssignees)
- [updateRecordStatus](#updateRecordStatus)
- [updateRecordsStatus](#updateRecordsStatus)

## Overview

```ts
const client = new KintoneRestAPIClient();

(async () => {
  try {
    const res = await client.record.getRecord({ app: "1", id: "10" });
  } catch (err) {
    console.log(err);
  }
})();
```

- All methods are defined on the `record` property.
- All methods return a Promise object that is resolved with an object having properties in each `Returns` section.

## Methods

### getRecord

Retrieves details of 1 record from an App by specifying the App ID and Record ID.

#### Parameters

| Name |       Type       | Required | Description    |
| ---- | :--------------: | :------: | -------------- |
| app  | Number or String |   Yes    | The App ID.    |
| id   | Number or String |   Yes    | The Record ID. |

#### Returns

| Name   |  Type  | Description                                                                    |
| ------ | :----: | ------------------------------------------------------------------------------ |
| record | Object | The type and value of all fields within the record are included in the object. |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/213149287

### addRecord

Adds 1 record to an App.

#### Parameters

| Name   |       Type       | Required | Description                                                                                                                                                                                                                                                                                                                    |
| ------ | :--------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| app    | Number or String |   Yes    | The App ID.                                                                                                                                                                                                                                                                                                                    |
| record |      Object      |          | Field codes and values are specified in this object. <br /> If ignored, the record will be added with default field values. <br /> If field codes that don't exist are specified, these will be ignored. <br /> For field type specs, check the [Field Types](https://developer.kintone.io/hc/en-us/articles/212494818/) page. |

#### Returns

| Name     |  Type  | Description                          |
| -------- | :----: | ------------------------------------ |
| id       | String | The Record ID of the created record. |
| revision | String | The revision number of the record.   |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/212494628

### updateRecord

Updates details of 1 record in an App by specifying its record number, or a different unique key.

#### Parameters

| Name            |       Type       |          Required           | Description                                                                                                                                                                                                     |
| --------------- | :--------------: | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app             | Number or String |             Yes             | The App ID.                                                                                                                                                                                                     |
| id              | Number or String | Conditionally<br />Required | The Record ID of the record to be updated. Required, if `updateKey` will not be specified.                                                                                                                      |
| updateKey       |      Object      | Conditionally<br />Required | The unique key of the record to be updated. Required, if `id` will not be specified. To specify this field, the field must have the "Prohibit duplicate values" option turned on.                               |
| updateKey.field |      String      | Conditionally<br />Required | The field code of the unique key.<br />Required, if `updateKey` will be specified.                                                                                                                              |
| updateKey.value | Number or String | Conditionally<br />Required | The value of the unique key.<br />Required, if `updateKey` will be specified.                                                                                                                                   |
| revision        | Number or String |                             | The expected revision number. If the value does not match, an error will occur and the record will not be updated. If the value is not specified or is `-1`, the revision number will not be checked.           |
| record          |      Object      |                             | Field codes and values are specified in this object. If ignored, the record will not be updated. For field type specs, check the [Field Types](https://developer.kintone.io/hc/en-us/articles/212494818/) page. |

#### Returns

| Name     |  Type  | Description                        |
| -------- | :----: | ---------------------------------- |
| revision | String | The revision number of the record. |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/213149027

### getRecords

Retrieves details of multiple records from an App by specifying the App ID and a query string.

#### Parameters

| Name       |       Type       | Required | Description                                                                                                                                                                    |
| ---------- | :--------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| app        | Number or String |   Yes    | The App ID.                                                                                                                                                                    |
| fields     | Array\<String\>  |          | The field codes to be included in the response. Ignoring this parameter will return all accessible fields that exist in the App.                                               |
| query      |      String      |          | The query string that specifies what records to include in the response. <br />Ignoring this parameter will return all accessible records from the App.                        |
| totalCount |     Boolean      |          | If set to `true`, the total count of records that match the query conditions will be included in the response.<br />If ignored, `null` is returned for the `totalCount` value. |

#### Returns

| Name       |  Type  | Description                                                                                                                                                        |
| ---------- | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| records    | Array  | An array of objects, including field types and field values within the matching records.                                                                           |
| totalCount | String | The total count of records that match the query conditions.<br />If the `totalCount` parameter is ignored or is set as `false` in the request, `null` is returned. |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/360019245194

### addRecords

Adds multiple records to an App.

#### Parameters

| Name    |       Type       | Required | Description                                                                                                                                                                                                                                                                                                                                     |
| ------- | :--------------: | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app     | Number or String |   Yes    | The App ID.                                                                                                                                                                                                                                                                                                                                     |
| records |      Array       |   Yes    | Holds an array of record objects, that contains field codes and their values.<br />Fields that are not included in the objects are added with their default value. Objects containing field codes that do not exist are ignored. For field type specs, check the [Field Types](https://developer.kintone.io/hc/en-us/articles/212494818/) page. |

#### Returns

| Name      |      Type       | Description                            |
| --------- | :-------------: | -------------------------------------- |
| ids       | Array\<String\> | The Record IDs of the created records. |
| revisions | Array\<String\> | The revision numbers of the records.   |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/360000313321

### updateRecords

Updates details of multiple records in an App, by specifying their record numbers, or their unique keys.

#### Parameters

| Name                      |       Type       |          Required           | Description                                                                                                                                                                                                     |
| ------------------------- | :--------------: | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app                       | Number or String |             Yes             | The App ID.                                                                                                                                                                                                     |
| records                   |      Array       |             Yes             | Holds an array of objects that include `id`/`updateKey`, `revision` and `record` objects.                                                                                                                       |
| records[].id              | Number or String | Conditionally<br />Required | The Record ID of the record to be updated. Required, if `updateKey` will not be specified.                                                                                                                      |
| records[].updateKey       |      Object      | Conditionally<br />Required | The unique key of the record to be updated. Required, if `id` will not be specified. To specify this field, the field must have the "Prohibit duplicate values" option turned on.                               |
| records[].updateKey.field |      String      | Conditionally<br />Required | The field code of the unique key. Required, if `updateKey` will be specified.                                                                                                                                   |
| records[].updateKey.value | Number or String | Conditionally<br />Required | The value of the unique key. Required, if `updateKey` will be specified.                                                                                                                                        |
| records[].revision        | Number or String |                             | The expected revision number. If the value does not match, an error will occur and all records will not be updated. If the value is not specified or is `-1`, the revision number will not be checked.          |
| records[].record          |      Object      |                             | Field codes and values are specified in this object. If ignored, the record will not be updated. For field type specs, check the [Field Types](https://developer.kintone.io/hc/en-us/articles/212494818/) page. |

#### Returns

| Name               |  Type  | Description                                                                    |
| ------------------ | :----: | ------------------------------------------------------------------------------ |
| records            | Array  | Holds an array of objects that include `id` and `revision` of updated records. |
| records[].id       | String | The ID of the record.                                                          |
| records[].revision | String | The revision number of the record.                                             |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/360000313622

### deleteRecords

Deletes multiple records in an app.

#### Parameters

| Name      |           Type            | Required | Description                                                                                                                                                                                                                                                                                                                                                                                              |
| --------- | :-----------------------: | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app       |     Number or String      |   Yes    | The App ID.                                                                                                                                                                                                                                                                                                                                                                                              |
| ids       | Array\<Number or String\> |   Yes    | Array of Record IDs that will be deleted.<br />Up to 100 records can be specified.                                                                                                                                                                                                                                                                                                                       |
| revisions | Array\<Number or String\> |          | The Expected revision number.<br />The first id number will correspond to the first revision number in the array, the second id to the second revision number, and so on.<br />If the revision number does not match, an error will occur and no records will be deleted.<br />If the revision number is left blank or is `-1`, the revision number will not be checked for the corresponding record ID. |

#### Returns

An empty object.

#### Reference

- https://developer.kintone.io/hc/en-us/articles/212494558

### getRecordComments

Retrieves multiple comments from a record in an app.

#### Parameters

| Name   |       Type       | Required | Description                                                                                                                                                                       |
| ------ | :--------------: | :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app    | Number or String |   Yes    | The App ID.                                                                                                                                                                       |
| record | Number or String |   Yes    | The Record ID.                                                                                                                                                                    |
| order  |      String      |          | The sort order of the Comment ID. Specifying "asc" will sort the comments in ascending order, and "desc" will sort the comments in descending order.                              |
| offset |      Number      |          | This skips the retrieval of the first number of comments.<br />"offset": 30 skips the first 30 comments, and retrieves from the 31st comment. There is no maximum for this value. |
| limit  |      Number      |          | The number of records to retrieve.<br />"limit": 5 will retrieve the first 5 comments. The default and maximum is 10 comments.                                                    |

#### Returns

| Name                       |  Type   | Description                                                                                                                              |
| -------------------------- | :-----: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| comments                   |  Array  | An array of comments. An empty array is returned if no conditions are met.                                                               |
| comments[].id              | String  | The Comment ID.                                                                                                                          |
| comments[].text            | String  | The comment including the line feed codes.<br />If a user is mentioned within a comment, the "@" symbol will be omitted from the String. |
| comments[].createdAt       | String  | The created date and time of the comment.                                                                                                |
| comments[].creator         | Object  | An object including information of the comment creator.                                                                                  |
| comments[].creator.code    | String  | The comment creator's user code (log in name).                                                                                           |
| comments[].creator.name    | String  | The comment creator's user name (display name).                                                                                          |
| comments[].mentions        |  Array  | An array including information of mentioned users.                                                                                       |
| comments[].mentions[].code | String  | The code of the mentioned user, group or organization.                                                                                   |
| comments[].mentions[].type | String  | The type of the mention.<ul><li>`USER`: User</li><li>`GROUP`: Group</li><li> `ORGANIZATION`: Department</li></ul>                        |
| older                      | Boolean | It indicates whether older comments exist.                                                                                               |
| newer                      | Boolean | It indicates whether newer comments exist.                                                                                               |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/219105188

### addRecordComment

Add a comment to a record in an app.

#### Parameters

| Name                    |       Type       | Required | Description                                                                                                                                                                                   |
| ----------------------- | :--------------: | :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app                     | Number or String |   Yes    | The App ID.                                                                                                                                                                                   |
| record                  | Number or String |   Yes    | The Record ID.                                                                                                                                                                                |
| comment                 |      Object      |   Yes    | An object including comment details.                                                                                                                                                          |
| comment.text            |      String      |   Yes    | The comment text. The maximum characters of the comment is 65535.                                                                                                                             |
| comment.mentions        |      Array       |          | An array including information to mention other users.                                                                                                                                        |
| comment.mentions[].code |      String      |          | The code the user, group or organization that will be mentioned. The maximum number of mentions is 10. The mentioned users will be placed in front of the comment text when the API succeeds. |
| comment.mentions[].type |      String      |          | The type of the mentioned target.<ul><li>`USER`: User</li><li>`GROUP`: Group</li><li> `ORGANIZATION`: Department</li></ul>                                                                    |

#### Returns

| Name |  Type  | Description     |
| ---- | :----: | --------------- |
| id   | String | The Comment ID. |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/219501367

### deleteRecordComment

Delete a comment in a record in an app.

#### Parameters

| Name    |       Type       | Required | Description     |
| ------- | :--------------: | :------: | --------------- |
| app     | Number or String |   Yes    | The App ID.     |
| record  | Number or String |   Yes    | The Record ID.  |
| comment | Number or String |   Yes    | The Comment ID. |

#### Returns

An empty object.

#### Reference

- https://developer.kintone.io/hc/en-us/articles/219562607

### createCursor

Adds a cursor so that large amount of records can be obtained from an App.

#### Parameters

| Name   |       Type       | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------ | :--------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app    | Number or String |   Yes    | The App ID.                                                                                                                                                                                                                                                                                                                                                                                                         |
| fields | Array\<String\>  |          | The field codes to be included in the response when using the [`getRecordsByCursor()`](#getRecordsByCursor). <br /> If ignored, all accessible fields in the app will be returned.                                                                                                                                                                                                                                  |
| query  |      String      |          | The query string that will specify what records will be responded when using the [`getRecordsByCursor()`](#getRecordsByCursor). <br /> Refer to the [Query Operators and Functions](https://developer.kintone.io/hc/en-us/articles/360019245194#optfunc) document for the operators and options that can be specified in the query string. <br /> If ignored, all accessible records from the App will be returned. |
| size   | Number or String |          | The maximum number of records the [`getRecordsByCursor()`](#getRecordsByCursor) can retrieve from this cursor with one request. <br /> The maximum number is 500 records. If ignored, the default number of records to be retrieved is 100.                                                                                                                                                                         |

#### Returns

| Name       |  Type  | Description                                                 |
| ---------- | :----: | ----------------------------------------------------------- |
| id         | String | The cursor ID.                                              |
| totalCount | String | The total count of records that match the query conditions. |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/360000280322

### getRecordsByCursor

Retrieves multiple records from an App by specifying the cursor ID.

#### Parameters

| Name |  Type  | Required | Description    |
| ---- | :----: | :------: | -------------- |
| id   | String |   Yes    | The cursor ID. |

#### Returns

| Name    |  Type   | Description                                                                                                                                                                                                                                                                                                     |
| ------- | :-----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| records |  Array  | An array of objects that includes field data of records that match the query. <br /> The response is the same as the response for the [`getRecords()`](#getRecords).                                                                                                                                            |
| next    | Boolean | States whether there are more records that can be acquired from the cursor. <br /> It indicates whether records to be acquired are still exist. <br /> Run this API again with the same parameters to obtain the next set of records. <br /> The cursor will remain valid until all records have been obtained. |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/360000280502

### deleteCursor

Deletes a cursor by specifying the cursor ID.

#### Parameters

| Name |  Type  | Required | Description    |
| ---- | :----: | :------: | -------------- |
| id   | String |   Yes    | The cursor ID. |

#### Returns

An empty object.

#### Reference

- https://developer.kintone.io/hc/en-us/articles/360000280522

### updateRecordAssignees

Updates the Assignees of a Record status, that was set with the [Process Management feature](https://get.kintone.help/hc/en-us/articles/115001510908-Configuring-Process-Management).

#### Parameters

| Name      |       Type       | Required | Description                                                                                                                                                                                                                                      |
| --------- | :--------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| app       | Number or String |   Yes    | The App ID.                                                                                                                                                                                                                                      |
| id        | Number or String |   Yes    | The Record ID.                                                                                                                                                                                                                                   |
| assignees | Array\<string\>  |   Yes    | The user code(s) (log in names) of the Assignee(s). If empty, no users will be assigned. The maximum number of Assignees is 100.                                                                                                                 |
| revision  | Number or String |          | The revision number of the record before updating the Assignees. If the specified revision is not the latest revision, the request will result in an error. The revision will not be checked if this parameter is ignored, or `-1` is specified. |

#### Returns

| Name     |  Type  | Description                                                     |
| -------- | :----: | --------------------------------------------------------------- |
| revision | String | The revision number of the record after updating the Assignees. |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/219563427

### updateRecordStatus

Updates the Status of a record of an App, that was set with the [Process Management feature](https://get.kintone.help/hc/en-us/articles/115001510908-Configuring-Process-Management).

#### Parameters

| Name     |       Type       |          Required           | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------- | :--------------: | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| action   |      String      |             Yes             | The Action name of the action to run. <br /> If the localization feature has been used to apply multiple translations of the Action name, specify the name of the Action in the language settings of the user that will run the API. API Tokens follow the language settings set in the [Localization page](https://get.kintone.help/hc/en-us/articles/115001461367-Localization) of the User & System Administration settings. |
| app      | Number or String |             Yes             | The App ID.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| assignee |      String      | Conditionally<br />Required | The next Assignee. Specify the Assignee's log in name. <br /> Required, if the "_Assignee List_" of the current status is set to "_User chooses one assignee from the list to take action_", and a selectable assignee exists.                                                                                                                                                                                                  |
| id       | Number or String |             Yes             | The record ID.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| revision | Number or String |                             | The revision number of the record before updating the status. <br /> If the specified revision is not the latest revision, the request will result in an error. <br /> The revision will not be checked if this parameter is ignored, or `-1` is specified.                                                                                                                                                                     |

#### Returns

| Name     |  Type  | Description                                                                                                                                                                                |
| -------- | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| revision | String | The revision number of the record after updating the status. <br /> The revision number will increase by 2, as two operations are preformed - running the action, and updating the status. |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/213149747

### ️updateRecordsStatus

Updates the Statuses of Multiple records of an App, that were set with the [Process Management feature](https://get.kintone.help/hc/en-us/articles/115001510908-Configuring-Process-Management).

#### Parameters

| Name               |       Type       | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | :--------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app                |      String      |   Yes    | The App ID.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| records            |      Array       |   Yes    | An array including information of the record to be updated. Up to 100 records can be specified.                                                                                                                                                                                                                                                                                                                                 |
| records[].action   |      String      |   Yes    | The Action name of the action to run. <br /> If the localization feature has been used to apply multiple translations of the Action name, specify the name of the Action in the language settings of the user that will run the API. API Tokens follow the language settings set in the [Localization page](https://get.kintone.help/hc/en-us/articles/115001461367-Localization) of the User & System Administration settings. |
| records[].assignee |      String      |          | The next Assignee. Specify the Assignee's log in name.                                                                                                                                                                                                                                                                                                                                                                          |
| records[].id       | Number or String |   Yes    | The Record ID.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| records[].revision | Number or String |          | The revision number of the record before updating the status. <br /> If the specified revision is not the latest revision, the request will result in an error. <br /> The revision will not be checked if this parameter is ignored, or `-1` is specified.                                                                                                                                                                     |

#### Returns

| Name               |  Type  | Description                                                                                                                                                                                |
| ------------------ | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| records            | Array  | An array including information of the updated records.                                                                                                                                     |
| records[].id       | String | The Record ID                                                                                                                                                                              |
| records[].revision | String | The revision number of the record after updating the status. <br /> The revision number will increase by 2, as two operations are preformed - running the action, and updating the status. |

#### Reference

- https://developer.kintone.io/hc/en-us/articles/360000334541
