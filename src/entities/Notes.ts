import { Column, Entity } from "typeorm";

@Entity("notes", { schema: "notesdb" })
export class Notes {
  @Column("int", { primary: true, name: "id_note" })
  idNote: number;

  @Column("varchar", { name: "title", nullable: true, length: 45 })
  title: string | null;

  @Column("varchar", { name: "content", nullable: true, length: 45 })
  content: string | null;

  @Column({ name: "archived" })
  archived: boolean;

  // @Column("varchar", { name: "duracion", nullable: true, length: 45 })
  // duracion: string | null;
}
