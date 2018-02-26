export class Incident {
  constructor(private id: number
              , public titre: string
              , public email: string
              , public description: string
              , public level: string
              , public type: string
              , public progress: number
              , public dateCreation: Date
              , public dateModification: Date) {
  }
}
