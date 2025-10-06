// Sammlung von Types.


// API Response Types
export interface FetchItem {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


// TODO: Erweitern, je nach Datenlage. 
// z.B. Date, Beschreibung, etc. 
// Man muss eben schauen, welche Marker-Daten nur für die Filterung im Backend relevant sind und welche tatsächlich 
// für die Anzeige im Frontend wichtig sind!

// Die hier reichen erstmal.
export interface MarkerData {
    longitude: number,
    latitude: number,
    datetime: string,
    username: string,


}