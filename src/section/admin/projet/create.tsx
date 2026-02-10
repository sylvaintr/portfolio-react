import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useCreateProjet from "../../../hook/useProjet";
import { schemaCreateProjet, type ProjetCreate } from "../../../types/projet";
import { useTranslation } from "react-i18next";




export default function CreateProjet() {

  const { mutate: createProjet, isPending } = useCreateProjet(); 
  const { t } = useTranslation();

  // 3. Configuration de React Hook Form avec Yup
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaCreateProjet)
  });

  // 4. Cette fonction reçoit les données validées
  const onSubmit = (data: ProjetCreate) => {
    createProjet(data); 
  };

  return (
    <Box
      sx={{ 
        justifyContent: "center", 
        alignItems: "center", 
        display: "flex", 
        height: "80vh" 
      }}
    >

      <Box 
        component="form" 
        onSubmit={handleSubmit(onSubmit)} 
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px' }}
      >
        <h1>{t('CREATE_PROJECT')}</h1>
        
        <TextField
          id="name"
          label="Nom du projet"
          variant="outlined"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          id="shortdescriptionfr"
          label="Description"
          variant="outlined"
          {...register("shortdescriptionfr")}
          error={!!errors.shortdescriptionfr}
          helperText={errors.shortdescriptionfr?.message}
        />

        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
            disabled={isPending} 
          >
          {t('CREATE')}
        </Button>
      </Box>
    </Box>
  );
}