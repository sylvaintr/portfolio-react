import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaEditProjet, type ProjetEdit } from "../../../types/projet";
import { useTranslation } from "react-i18next";
import { useEditProjet, useProjet } from "../../../hook/useProjet";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";




export default function EditProjet() {

  const navigate = useNavigate();
  const params = useParams();
  const id = params.id ? String(params.id) : null;

  const { data: projet } = useProjet(id ?? undefined);

  useEffect(() => {
    if (!id) navigate('/');
  }, [id, navigate]);

  
  const { mutate: editProjet, isPending } = useEditProjet(); 
  const { t } = useTranslation();

  // 3. Configuration de React Hook Form avec Yup
  const { register, handleSubmit, formState: { errors } } = useForm<Omit<ProjetEdit, 'id'>>({
    resolver: yupResolver(schemaEditProjet) as any
  });

  // 4. Cette fonction reçoit les données validées
  const onSubmit = (data: Omit<ProjetEdit, 'id'>) => {
    if (!id) return;
    editProjet({ id: Number(id), ...data });
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
        <h1>{t('EDIT_PROJECT')}</h1>
        
        <TextField
          id="name"
          label={t('NAME_PROJECT')}
          value={projet?.name}
          variant="outlined"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          id="shortdescriptionfr"
          label={t('SHORT_DESCRIPTION_FR')}
          variant="outlined"
          value={projet?.shortdescriptionfr}
          {...register("shortdescriptionfr")}
          error={!!errors.shortdescriptionfr}
          helperText={errors.shortdescriptionfr?.message}
        />

        <TextField
          id="longdescriptionfr"
          label={t('LONG_DESCRIPTION_FR')}
          variant="outlined"
          value={projet?.longdescriptionfr}
          {...register("longdescriptionfr")}
          error={!!errors.longdescriptionfr}
          helperText={errors.longdescriptionfr?.message}
        />

        <TextField
          id="shortdescriptionen"
          label={t('SHORT_DESCRIPTION_EN')}
          variant="outlined"
          value={projet?.shortdescriptionen}
          {...register("shortdescriptionen")}
          error={!!errors.shortdescriptionen}
          helperText={errors.shortdescriptionen?.message}
        />

        <TextField
          id="longdescriptionen"
          label={t('LONG_DESCRIPTION_EN')}
          variant="outlined"
          value={projet?.longdescriptionen}
          {...register("longdescriptionen")}
          error={!!errors.longdescriptionen}
          helperText={errors.longdescriptionen?.message}
        />

        <TextField
          id="linkGithub"
          label={t('LINK_GITHUB')}
          variant="outlined"
          value={projet?.linkGithub}
          {...register("linkGithub")}
          error={!!errors.linkGithub}
          helperText={errors.linkGithub?.message}
        />

        <TextField
          id="linkWeb"
          label={t('LINK_WEB')}
          variant="outlined"
          value={projet?.linkWeb}
          {...register("linkWeb")}
          error={!!errors.linkWeb}
          helperText={errors.linkWeb?.message}
        />
        
         







        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
            disabled={isPending} 
          >
          {t('EDIT_PROJECT')}
        </Button>
      </Box>
    </Box>
  );
}