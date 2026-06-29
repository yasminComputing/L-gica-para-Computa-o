public class Candidatos {
        public int id;
        public String nome;
        public int idade;
        public int anoExperiencia;
        public String tecnico;
        public String ingles;

        public Candidatos(int id, String nome, int idade, int anoExperiencia, String tecnico, String ingles) {
            this.id = id;
            this.nome = nome;
            this.idade = idade;
            this.anoExperiencia = anoExperiencia;
            this.tecnico = tecnico;
            this.ingles = ingles;
        }
    
        @Override
        public String toString() {
            return "Candidatos [id=" + id + ", nome=" + nome + ", idade=" + idade + ", anoExperiencia=" + anoExperiencia
                    + ", tecnico=" + tecnico + ", ingles=" + ingles + "]";
        }

}
